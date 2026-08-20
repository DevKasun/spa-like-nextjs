"use client";

import { useEffect, useMemo, useState } from "react";
import { CATEGORIES, difficultyOrder, MUSCLE_LABELS, type Category, type Workout } from "@/app/lib/workouts";
import { WorkoutCard } from "@/app/components/workout-card";

type ApiResponse = { workouts: Workout[]; total: number };

const SKELETON_COUNT = 6;

function SkeletonCard() {
  return (
    <div className="workout-card workout-card--skeleton" aria-hidden="true">
      <div className="skeleton skeleton--figure" />
      <div className="workout-card__body">
        <div className="skeleton skeleton--line skeleton--title" />
        <div className="skeleton skeleton--line" />
        <div className="skeleton skeleton--line skeleton--short" />
        <div className="skeleton skeleton--line" />
      </div>
    </div>
  );
}

export function WorkoutDashboard() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");

  useEffect(() => {
    let cancelled = false;

    fetch("/api/workouts")
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        return res.json();
      })
      .then((data: ApiResponse) => {
        if (cancelled) return;
        setWorkouts(data.workouts);
        setError(null);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Failed to load workouts");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return workouts
      .filter((workout) => {
        if (category !== "all" && workout.category !== category) return false;
        if (needle.length === 0) return true;
        return (
          workout.name.toLowerCase().includes(needle) ||
          MUSCLE_LABELS[workout.mainMuscle].toLowerCase().includes(needle) ||
          workout.secondaryMuscles.some((muscle) =>
            MUSCLE_LABELS[muscle].toLowerCase().includes(needle),
          )
        );
      })
      .sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
  }, [workouts, query, category]);

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <p className="dashboard__eyebrow">Gym Training</p>
        <h1 className="dashboard__title">Workout Dashboard</h1>
        <p className="dashboard__subtitle">
          Browse exercises and see exactly which muscles they target.
        </p>
      </header>

      <div className="dashboard__controls">
        <label className="search-field">
          <span className="search-field__icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </span>
          <input
            className="search-field__input"
            type="search"
            placeholder="Search workouts, muscles, exercises..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search workouts"
          />
        </label>

        <div className="quick-filters" role="group" aria-label="Filter by body part">
          {CATEGORIES.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className={`quick-filter${category === value ? " is-active" : ""}`}
              aria-pressed={category === value}
              onClick={() => setCategory(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {error ? (
        <div className="dashboard__status" role="alert">
          <p className="dashboard__status-text">
            Something went wrong while loading workouts.
          </p>
          <p className="dashboard__status-sub">{error}</p>
          <button type="button" className="retry-button" onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      ) : loading ? (
        <div className="dashboard__grid" aria-busy="true">
          {Array.from({ length: SKELETON_COUNT }, (_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : filtered.length > 0 ? (
        <>
          <p className="dashboard__count" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "workout" : "workouts"} shown
          </p>
          <div className="dashboard__grid">
            {filtered.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        </>
      ) : (
        <div className="dashboard__status">
          <p className="dashboard__status-text">No workouts found</p>
          <p className="dashboard__status-sub">
            Try a different search term or clear the filters.
          </p>
          <button
            type="button"
            className="retry-button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}