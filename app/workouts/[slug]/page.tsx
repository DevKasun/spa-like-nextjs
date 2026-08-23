import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { BodyFigure } from "@/app/components/body-figure";
import { WorkoutCard } from "@/app/components/workout-card";
import { MUSCLE_LABELS, workouts } from "@/app/lib/workouts";

export async function generateStaticParams() {
  return workouts.map((workout) => ({ slug: workout.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const workout = workouts.find((w) => w.id === slug);
  if (!workout) {
    return {
      title: "Workout Not Found | GymFit",
    };
  }
  return {
    title: `${workout.name} | GymFit`,
    description: `${workout.name} — ${MUSCLE_LABELS[workout.mainMuscle]} focused workout. Category: ${workout.category}, Difficulty: ${workout.difficulty}.`,
  };
}

async function getWorkout(slug: string) {
  "use cache";
  return workouts.find((w) => w.id === slug) ?? null;
}

function WorkoutDetailSkeleton() {
  return (
    <div className="workout-detail" aria-busy="true">
      <div className="skeleton skeleton--line skeleton--title" style={{ width: "220px", height: "48px", margin: "0 auto" }} />
      <div className="workout-detail__content">
        <div className="skeleton skeleton--figure" style={{ borderRadius: "12px" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", flex: 1 }}>
          <div className="skeleton skeleton--line" style={{ height: "24px" }} />
          <div className="skeleton skeleton--line" style={{ height: "60px" }} />
          <div className="skeleton skeleton--line" style={{ height: "80px" }} />
        </div>
      </div>
      <div className="workout-detail__panels">
        <div className="workout-detail__panel">
          <div className="skeleton skeleton--line skeleton--short" style={{ height: "16px", marginBottom: "12px" }} />
          <div className="skeleton skeleton--line" />
          <div className="skeleton skeleton--line" />
          <div className="skeleton skeleton--line skeleton--short" />
        </div>
        <div className="workout-detail__panel">
          <div className="skeleton skeleton--line skeleton--short" style={{ height: "16px", marginBottom: "12px" }} />
          <div className="skeleton skeleton--line" />
          <div className="skeleton skeleton--line skeleton--short" />
        </div>
      </div>
    </div>
  );
}

async function WorkoutContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const workout = await getWorkout(slug);

  if (!workout) {
    notFound();
  }

  const description =
    workout.description ??
    `The ${workout.name} focuses on ${MUSCLE_LABELS[workout.mainMuscle]} development within the ${workout.category} category.`;
  const instructions =
    workout.instructions ?? [
      "Warm up the target joint and prime movement with light sets.",
      "Perform the exercise with controlled tempo and full range.",
      "Keep core braced and maintain neutral spine throughout.",
      "Progress load gradually while keeping strict form.",
    ];
  const tips =
    workout.tips ?? [
      "Prioritize technique over weight.",
      "Rest 60–120s between sets for recovery.",
    ];

  const related = workouts
    .filter((w) => w.category === workout.category && w.id !== workout.id)
    .slice(0, 3);

  return (
    <div className="workout-detail">
      <header className="workout-detail__header">
        <p className="workout-detail__eyebrow">{workout.category} workout</p>
        <h1 className="workout-detail__title">{workout.name}</h1>
        <div className="workout-card__tags">
          <span className="tag tag--category">{workout.category}</span>
          <span className="tag tag--difficulty">{workout.difficulty}</span>
        </div>
      </header>

      <div className="workout-detail__content">
        <div className="workout-detail__figure">
          <BodyFigure
            mainMuscle={workout.mainMuscle}
            secondaryMuscles={workout.secondaryMuscles}
          />
        </div>

        <div className="workout-detail__info">
          <dl className="muscle-list workout-detail__muscles">
            <div className="muscle-list__row">
              <dt>Main muscle</dt>
              <dd>
                <span className="muscle-badge muscle-badge--main">
                  {MUSCLE_LABELS[workout.mainMuscle]}
                </span>
              </dd>
            </div>
            <div className="muscle-list__row">
              <dt>Secondary</dt>
              <dd>
                {workout.secondaryMuscles.length > 0 ? (
                  workout.secondaryMuscles.map((muscle) => (
                    <span
                      key={muscle}
                      className="muscle-badge muscle-badge--secondary"
                    >
                      {MUSCLE_LABELS[muscle]}
                    </span>
                  ))
                ) : (
                  <span className="muscle-list__empty">None</span>
                )}
              </dd>
            </div>
          </dl>

          <div className="workout-detail__stats">
            <div className="workout-detail__stat">
              <span className="workout-detail__stat-label">Category</span>
              <span className="workout-detail__stat-value">
                {workout.category}
              </span>
            </div>
            <div className="workout-detail__stat">
              <span className="workout-detail__stat-label">Difficulty</span>
              <span className="workout-detail__stat-value">
                {workout.difficulty}
              </span>
            </div>
            <div className="workout-detail__stat">
              <span className="workout-detail__stat-label">Primary</span>
              <span className="workout-detail__stat-value">
                {MUSCLE_LABELS[workout.mainMuscle]}
              </span>
            </div>
          </div>

          <p className="workout-detail__description">{description}</p>
        </div>
      </div>

      <div className="workout-detail__panels">
        <section className="workout-detail__panel">
          <h2 className="workout-detail__panel-title">How to perform</h2>
          <ol className="workout-detail__list">
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="workout-detail__panel">
          <h2 className="workout-detail__panel-title">Pro tips</h2>
          <ul className="workout-detail__list">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>
      </div>

      {related.length > 0 && (
        <section className="workout-detail__related">
          <h2 className="workout-detail__section-title">
            More {workout.category} workouts
          </h2>
          <div className="workout-detail__related-grid">
            {related.map((w) => (
              <WorkoutCard key={w.id} workout={w} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default function WorkoutDetailPage(
  props: PageProps<"/workouts/[slug]">,
) {
  return (
    <main className="page">
      <Link href="/" className="workout-detail__back">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 18 9 12l6-6" />
        </svg>
        Back to Dashboard
      </Link>

      <Suspense fallback={<WorkoutDetailSkeleton />}>
        <WorkoutContent params={props.params} />
      </Suspense>
    </main>
  );
}
