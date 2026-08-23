import Link from "next/link";
import { BodyFigure } from "@/app/components/body-figure";
import { MUSCLE_LABELS, type Workout } from "@/app/lib/workouts";

export function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link href={`/workouts/${workout.id}`} className="workout-card">
      <div className="workout-card__figure">
        <BodyFigure
          mainMuscle={workout.mainMuscle}
          secondaryMuscles={workout.secondaryMuscles}
        />
      </div>

      <div className="workout-card__body">
        <h3 className="workout-card__title">{workout.name}</h3>

        <div className="workout-card__tags">
          <span className="tag tag--category">{workout.category}</span>
          <span className="tag tag--difficulty">{workout.difficulty}</span>
        </div>

        <dl className="muscle-list">
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
            <dd className="muscle-list__badges">
              {workout.secondaryMuscles.length > 0 ? (
                workout.secondaryMuscles.map((muscle) => (
                  <span key={muscle} className="muscle-badge muscle-badge--secondary">
                    {MUSCLE_LABELS[muscle]}
                  </span>
                ))
              ) : (
                <span className="muscle-list__empty">None</span>
              )}
            </dd>
          </div>
        </dl>
      </div>
    </Link>
  );
}