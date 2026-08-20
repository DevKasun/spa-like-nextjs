export type Category =
  | "chest"
  | "back"
  | "shoulders"
  | "arms"
  | "legs"
  | "core";

export type MuscleGroup =
  | "chest"
  | "back"
  | "shoulders"
  | "biceps"
  | "triceps"
  | "forearms"
  | "abs"
  | "quads"
  | "hamstrings"
  | "glutes"
  | "calves";

export interface Workout {
  id: string;
  name: string;
  category: Category;
  mainMuscle: MuscleGroup;
  secondaryMuscles: MuscleGroup[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export const CATEGORIES: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "arms", label: "Arms" },
  { value: "chest", label: "Chest" },
  { value: "back", label: "Back" },
  { value: "shoulders", label: "Shoulders" },
  { value: "legs", label: "Legs" },
  { value: "core", label: "Core" },
];

export const MUSCLE_LABELS: Record<MuscleGroup, string> = {
  chest: "Chest",
  back: "Back",
  shoulders: "Shoulders",
  biceps: "Biceps",
  triceps: "Triceps",
  forearms: "Forearms",
  abs: "Abs",
  quads: "Quads",
  hamstrings: "Hamstrings",
  glutes: "Glutes",
  calves: "Calves",
};

export const workouts: Workout[] = [
  {
    id: "bench-press",
    name: "Bench Press",
    category: "chest",
    mainMuscle: "chest",
    secondaryMuscles: ["triceps", "shoulders"],
    difficulty: "Intermediate",
  },
  {
    id: "incline-dumbbell-press",
    name: "Incline Dumbbell Press",
    category: "chest",
    mainMuscle: "chest",
    secondaryMuscles: ["shoulders", "triceps"],
    difficulty: "Intermediate",
  },
  {
    id: "push-up",
    name: "Push-Up",
    category: "chest",
    mainMuscle: "chest",
    secondaryMuscles: ["triceps", "shoulders", "abs"],
    difficulty: "Beginner",
  },
  {
    id: "barbell-row",
    name: "Barbell Row",
    category: "back",
    mainMuscle: "back",
    secondaryMuscles: ["biceps", "forearms"],
    difficulty: "Intermediate",
  },
  {
    id: "pull-up",
    name: "Pull-Up",
    category: "back",
    mainMuscle: "back",
    secondaryMuscles: ["biceps", "forearms"],
    difficulty: "Advanced",
  },
  {
    id: "lat-pulldown",
    name: "Lat Pulldown",
    category: "back",
    mainMuscle: "back",
    secondaryMuscles: ["biceps", "shoulders"],
    difficulty: "Beginner",
  },
  {
    id: "deadlift",
    name: "Deadlift",
    category: "back",
    mainMuscle: "back",
    secondaryMuscles: ["glutes", "hamstrings", "forearms"],
    difficulty: "Advanced",
  },
  {
    id: "overhead-press",
    name: "Overhead Press",
    category: "shoulders",
    mainMuscle: "shoulders",
    secondaryMuscles: ["triceps", "abs"],
    difficulty: "Intermediate",
  },
  {
    id: "lateral-raise",
    name: "Lateral Raise",
    category: "shoulders",
    mainMuscle: "shoulders",
    secondaryMuscles: [],
    difficulty: "Beginner",
  },
  {
    id: "bicep-curl",
    name: "Barbell Bicep Curl",
    category: "arms",
    mainMuscle: "biceps",
    secondaryMuscles: ["forearms"],
    difficulty: "Beginner",
  },
  {
    id: "hammer-curl",
    name: "Hammer Curl",
    category: "arms",
    mainMuscle: "biceps",
    secondaryMuscles: ["forearms"],
    difficulty: "Beginner",
  },
  {
    id: "tricep-pushdown",
    name: "Tricep Pushdown",
    category: "arms",
    mainMuscle: "triceps",
    secondaryMuscles: ["forearms"],
    difficulty: "Beginner",
  },
  {
    id: "close-grip-bench-press",
    name: "Close-Grip Bench Press",
    category: "arms",
    mainMuscle: "triceps",
    secondaryMuscles: ["chest", "shoulders"],
    difficulty: "Intermediate",
  },
  {
    id: "barbell-squat",
    name: "Barbell Squat",
    category: "legs",
    mainMuscle: "quads",
    secondaryMuscles: ["glutes", "hamstrings", "abs"],
    difficulty: "Intermediate",
  },
  {
    id: "leg-press",
    name: "Leg Press",
    category: "legs",
    mainMuscle: "quads",
    secondaryMuscles: ["glutes", "hamstrings"],
    difficulty: "Beginner",
  },
  {
    id: "romanian-deadlift",
    name: "Romanian Deadlift",
    category: "legs",
    mainMuscle: "hamstrings",
    secondaryMuscles: ["glutes", "back"],
    difficulty: "Intermediate",
  },
  {
    id: "calf-raise",
    name: "Standing Calf Raise",
    category: "legs",
    mainMuscle: "calves",
    secondaryMuscles: ["quads"],
    difficulty: "Beginner",
  },
  {
    id: "plank",
    name: "Plank",
    category: "core",
    mainMuscle: "abs",
    secondaryMuscles: ["shoulders", "back"],
    difficulty: "Beginner",
  },
  {
    id: "crunches",
    name: "Crunches",
    category: "core",
    mainMuscle: "abs",
    secondaryMuscles: [],
    difficulty: "Beginner",
  },
  {
    id: "hanging-leg-raise",
    name: "Hanging Leg Raise",
    category: "core",
    mainMuscle: "abs",
    secondaryMuscles: ["quads", "forearms"],
    difficulty: "Advanced",
  },
];

export const difficultyOrder: Record<Workout["difficulty"], number> = {
  Beginner: 0,
  Intermediate: 1,
  Advanced: 2,
};