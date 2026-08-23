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

export interface WorkoutDetails {
  description: string;
  instructions: string[];
  tips: string[];
}

export interface Workout {
  id: string;
  name: string;
  category: Category;
  mainMuscle: MuscleGroup;
  secondaryMuscles: MuscleGroup[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  instructions: string[];
  tips: string[];
}

export const WORKOUT_DETAILS: Record<string, WorkoutDetails> = {
  "bench-press": {
    description:
      "The Bench Press is a foundational compound push that builds chest size and pressing strength. It primarily targets the chest while recruiting the triceps and front delts for lockout.",
    instructions: [
      "Lie flat on bench, feet planted, eyes under the bar.",
      "Grip slightly wider than shoulders, retract scapulae and brace core.",
      "Lower bar to mid-chest with control, elbows at ~45°.",
      "Press explosively to start, keeping wrists stacked over elbows.",
    ],
    tips: [
      "Keep glutes on the bench and drive through the legs.",
      "Avoid bouncing the bar off the chest.",
    ],
  },
  "incline-dumbbell-press": {
    description:
      "The Incline Dumbbell Press emphasizes the upper chest and front delts with a greater range of motion than the barbell version.",
    instructions: [
      "Set bench to 30–45°, dumbbells at shoulder height, palms forward.",
      "Press up until arms are extended without locking elbows harshly.",
      "Lower slowly until you feel a stretch across the chest.",
      "Maintain neutral wrists and no arching of lower back.",
    ],
    tips: [
      "Choose a weight that lets you control the eccentric.",
      "Keep dumbbells from clanging together at the top.",
    ],
  },
  "push-up": {
    description:
      "A bodyweight staple that trains the chest, triceps and core. Easily scalable and perfect for warm-ups or finishers.",
    instructions: [
      "Start in high plank, hands under shoulders, body in straight line.",
      "Brace abs and glutes, lower chest to just above floor.",
      "Elbows track ~45° from torso, not flared wide.",
      "Push floor away to return to top with full body tension.",
    ],
    tips: [
      "Scale with incline if needed, elevate hands to reduce load.",
      "Keep neck neutral — look slightly forward, not down.",
    ],
  },
  "barbell-row": {
    description:
      "A classic hinge-row that builds thickness through the lats, rhomboids and biceps while reinforcing hip hinge posture.",
    instructions: [
      "Hinge at hips, back flat, knees soft, bar over mid-foot.",
      "Grip just outside knees, brace and pull bar to lower ribs.",
      "Squeeze shoulder blades together at the top without shrugging.",
      "Lower with control, maintain torso angle throughout.",
    ],
    tips: [
      "Don't jerk with momentum — use strict control.",
      "Keep head aligned with spine, gaze a few feet ahead.",
    ],
  },
  "pull-up": {
    description:
      "The king of vertical pulling — develops lats and biceps, demands relative strength and full body tension.",
    instructions: [
      "Hang from bar with full extension, overhand grip slightly beyond shoulders.",
      "Depress shoulders, brace core, pull chest toward bar.",
      "Lead with elbows down, avoid swinging or kipping for strict reps.",
      "Lower to full hang with control before next rep.",
    ],
    tips: [
      "Use band assistance or negatives if building strength.",
      "Think ‘chest to bar’ not just chin over bar.",
    ],
  },
  "lat-pulldown": {
    description:
      "Machine-based vertical pull ideal for beginners to learn lat activation and build the base for pull-ups.",
    instructions: [
      "Sit with thighs secured, grip bar slightly wider than shoulders.",
      "Lean back slightly, pull bar to upper chest, elbows toward ribs.",
      "Pause briefly, squeeze lats, then return slowly.",
      "Keep chest tall and avoid leaning excessively back.",
    ],
    tips: [
      "Don't pull behind the neck — stay to the front.",
      "Control the eccentric to maximize time under tension.",
    ],
  },
  deadlift: {
    description:
      "A full-body hip-hinge powerhouse that trains the entire posterior chain — back, glutes, hamstrings and grip.",
    instructions: [
      "Stand with bar over mid-foot, hinge and grip just outside legs.",
      "Brace core, set lats tight, shins close, chest up.",
      "Drive through the floor, hips and shoulders rise together.",
      "Stand tall, glutes squeezed, then reverse the hinge to lower.",
    ],
    tips: [
      "Keep bar close to shins throughout the lift.",
      "Never round the lower back under load.",
    ],
  },
  "overhead-press": {
    description:
      "A strict vertical press that builds shoulder strength and total-body stability through the core and glutes.",
    instructions: [
      "Rack bar at front delts, grip just outside shoulders, elbows slightly forward.",
      "Brace core, squeeze glutes, press straight overhead.",
      "Lock out with biceps by ears, head pushed slightly through.",
      "Lower to shoulders with control for next rep.",
    ],
    tips: [
      "Avoid excessive lower-back arch — keep ribs down.",
      "Use microplates to progress sustainably.",
    ],
  },
  "lateral-raise": {
    description:
      "An isolation lift that sculpts the lateral delts for wider shoulders. Light weight, strict form wins here.",
    instructions: [
      "Hold dumbbells at sides, soft elbows, slight forward lean.",
      "Raise arms to shoulder height with slight bend, leading with elbows.",
      "Pause at top without shrugging traps excessively.",
      "Lower slowly, resisting gravity.",
    ],
    tips: [
      "Keep pinkies slightly higher than thumbs at the top.",
      "Don't swing — if you must heave, the weight is too heavy.",
    ],
  },
  "bicep-curl": {
    description:
      "The classic arm builder — isolates the biceps with supinated grip and constant tension.",
    instructions: [
      "Stand tall, barbell supinated grip shoulder-width, elbows tucked.",
      "Curl without swaying, elbows fixed at sides.",
      "Squeeze hard at top, forearms vertical, not beyond.",
      "Lower with control, full extension without losing tension.",
    ],
    tips: [
      "Keep shoulders down, don't let them roll forward.",
      "Avoid leaning back to cheat the weight up.",
    ],
  },
  "hammer-curl": {
    description:
      "A neutral-grip curl that hits biceps and brachialis while building forearm thickness.",
    instructions: [
      "Hold dumbbells neutral, palms facing each other at sides.",
      "Curl up keeping elbows pinned, no shoulder rotation.",
      "Squeeze at top, then lower under control.",
      "Alternate or perform together, maintaining upright posture.",
    ],
    tips: [
      "Keep wrists neutral, don't flex or extend.",
      "Focus on the brachialis squeeze mid-range.",
    ],
  },
  "tricep-pushdown": {
    description:
      "Cable isolation for the triceps — great for elbow health and arm definition with constant tension.",
    instructions: [
      "Attach bar/rope at top, elbows pinned at sides.",
      "Push down until arms are fully extended, elbows stationary.",
      "Squeeze triceps hard at lockout, wrists neutral.",
      "Return slowly, keeping tension on the stack.",
    ],
    tips: [
      "Lean slightly forward, core braced, avoid shoulder shrug.",
      "Don't let elbows drift forward.",
    ],
  },
  "close-grip-bench-press": {
    description:
      "A compound triceps builder that uses a narrow grip bench to overload lockout strength.",
    instructions: [
      "Lie on bench, grip about shoulder-width or slightly narrower.",
      "Lower to lower chest/ribs, elbows tucked close to body.",
      "Press to lockout, squeezing triceps at top.",
      "Keep wrists stacked and scapulae retracted.",
    ],
    tips: [
      "Don't go too narrow — wrist stress increases.",
      "Use a spotter when nearing failure.",
    ],
  },
  "barbell-squat": {
    description:
      "The king of leg training — quad-dominant compound that also challenges glutes, hamstrings and core bracing.",
    instructions: [
      "Set bar on upper traps/rear delts, feet shoulder-width, toes slightly out.",
      "Brace, break at hips and knees together, sit down between legs.",
      "Descend to at least parallel while keeping chest up and knees tracking over toes.",
      "Drive through whole foot to stand, hips under bar.",
    ],
    tips: [
      "Maintain neutral spine — avoid butt wink at depth.",
      "Wear stable shoes or squat shoes for balance.",
    ],
  },
  "leg-press": {
    description:
      "Machine-based leg press allowing heavy quad and glute work without spinal loading of a barbell.",
    instructions: [
      "Sit with back flat against pad, feet shoulder-width on platform.",
      "Release safeties, lower sled with control, knees tracking toes.",
      "Descend until knees ~90° or slightly deeper without rounding low back.",
      "Press through mid-foot to return without locking knees harshly.",
    ],
    tips: [
      "Don't let knees cave inward at the bottom.",
      "Keep low back pressed into pad throughout.",
    ],
  },
  "romanian-deadlift": {
    description:
      "A hinge variation that isolates hamstrings and glutes with constant tension and a deep stretch.",
    instructions: [
      "Stand with bar at hips, hinge back, soft knees, bar close to thighs.",
      "Slide bar down shins feeling hamstring stretch, back flat.",
      "Stop just below knees or where stretch peaks, then drive hips forward.",
      "Lock out with glute squeeze, don't hyperextend low back.",
    ],
    tips: [
      "Think ‘hips back’ not ‘bar down’.",
      "Keep lats engaged to keep bar close.",
    ],
  },
  "calf-raise": {
    description:
      "Isolation for the calves to build ankle stability and lower-leg definition. High reps and full range matter.",
    instructions: [
      "Stand on platform edge, balls of feet on edge, heels hanging off.",
      "Rise onto toes fully, squeezing calves at top for a second.",
      "Lower slowly below platform level for stretch.",
      "Repeat with controlled tempo, no bouncing.",
    ],
    tips: [
      "Pause at top and bottom to eliminate momentum.",
      "Progress with single-leg variations if needed.",
    ],
  },
  plank: {
    description:
      "Anti-extension core drill that builds stiffness and endurance through the abs, back and shoulders.",
    instructions: [
      "Set forearms under shoulders, legs extended, body straight line.",
      "Brace abs hard, squeeze glutes, press floor away with forearms.",
      "Hold without letting hips sag or pike upwards.",
      "Breathe steadily while maintaining tension.",
    ],
    tips: [
      "Think ‘long body’ — heels pushed back, crown forward.",
      "Stop when form breaks, not just when timer ends.",
    ],
  },
  crunches: {
    description:
      "Basic spinal-flexion core movement to target the rectus abdominis with controlled crunch.",
    instructions: [
      "Lie on back, knees bent, hands lightly behind head.",
      "Curl ribs toward pelvis, lifting shoulders off floor.",
      "Exhale and squeeze abs at peak, avoid pulling neck.",
      "Lower with control, keep low back gently pressed.",
    ],
    tips: [
      "Move ribs not head — keep chin slightly tucked.",
      "Slow tempo beats high speed reps.",
    ],
  },
  "hanging-leg-raise": {
    description:
      "Advanced hanging core exercise that crushes the lower abs while challenging grip and hip flexors.",
    instructions: [
      "Hang from bar with full extension, shoulders packed.",
      "Brace and raise legs with slight knee bend to 90° or higher.",
      "Control down without swinging, keep tension.",
      "For harder variation, keep legs straight to the bar.",
    ],
    tips: [
      "Use straps if grip fails before abs.",
      "Prevent swinging by pausing dead-hang between reps.",
    ],
  },
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

type BaseWorkout = Omit<Workout, "description" | "instructions" | "tips">;

const baseWorkouts: BaseWorkout[] = [
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

export const workouts: Workout[] = baseWorkouts.map((w) => ({
  ...w,
  ...WORKOUT_DETAILS[w.id],
}));

export const difficultyOrder: Record<Workout["difficulty"], number> = {
  Beginner: 0,
  Intermediate: 1,
  Advanced: 2,
};