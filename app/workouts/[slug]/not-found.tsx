import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page">
      <div className="workout-detail">
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

        <div className="dashboard__status" role="alert">
          <p className="dashboard__status-text">Workout not found</p>
          <p className="dashboard__status-sub">
            The workout you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="retry-button">
            Browse all workouts
          </Link>
        </div>
      </div>
    </main>
  );
}
