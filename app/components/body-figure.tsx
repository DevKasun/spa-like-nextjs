import type { ReactNode } from "react";
import type { MuscleGroup } from "@/app/lib/workouts";

const MUSCLE_TO_PARTS: Record<MuscleGroup, string[]> = {
  chest: ["chest"],
  back: ["lats", "lower-back"],
  shoulders: ["delts"],
  biceps: ["biceps"],
  triceps: ["triceps"],
  forearms: ["forearms"],
  abs: ["abs"],
  quads: ["quads"],
  hamstrings: ["hamstrings"],
  glutes: ["glutes"],
  calves: ["calves"],
};

const FRONT_PARTS: Record<string, ReactNode> = {
  head: <circle cx="100" cy="46" r="23" />,
  neck: <rect x="91" y="63" width="18" height="22" rx="7" />,
  torso: (
    <path d="M 64 84 C 58 86 54 92 54 100 C 54 130 58 160 64 180 C 68 194 74 202 82 208 L 118 208 C 126 202 132 194 136 180 C 142 160 146 130 146 100 C 146 92 142 86 136 84 Q 100 74 64 84 Z" />
  ),
  delts: (
    <g>
      <ellipse
        cx="57"
        cy="98"
        rx="12"
        ry="16"
        transform="rotate(-20 57 98)"
      />
      <ellipse
        cx="143"
        cy="98"
        rx="12"
        ry="16"
        transform="rotate(20 143 98)"
      />
    </g>
  ),
  chest: (
    <path d="M 72 96 C 82 90 118 90 128 96 L 128 112 C 122 118 114 122 100 122 C 86 122 78 118 72 112 Z" />
  ),
  abs: (
    <path d="M 78 126 L 122 126 C 122 150 120 170 114 182 L 86 182 C 80 170 78 150 78 126 Z" />
  ),
  biceps: (
    <g>
      <rect x="43" y="104" width="17" height="52" rx="8" transform="rotate(5 51 130)" />
      <rect x="140" y="104" width="17" height="52" rx="8" transform="rotate(-5 149 130)" />
    </g>
  ),
  forearms: (
    <g>
      <rect x="45" y="154" width="15" height="52" rx="7" transform="rotate(-3 52 180)" />
      <rect x="140" y="154" width="15" height="52" rx="7" transform="rotate(3 148 180)" />
    </g>
  ),
  hands: (
    <g>
      <circle cx="51" cy="211" r="9" />
      <circle cx="149" cy="211" r="9" />
    </g>
  ),
  quads: (
    <g>
      <rect x="72" y="198" width="26" height="76" rx="11" transform="rotate(-3 85 236)" />
      <rect x="102" y="198" width="26" height="76" rx="11" transform="rotate(3 115 236)" />
    </g>
  ),
  calves: (
    <g>
      <rect x="74" y="272" width="22" height="60" rx="10" transform="rotate(-3 85 302)" />
      <rect x="104" y="272" width="22" height="60" rx="10" transform="rotate(3 115 302)" />
    </g>
  ),
  feet: (
    <g>
      <rect x="68" y="330" width="30" height="15" rx="7" transform="rotate(-4 83 337)" />
      <rect x="102" y="330" width="30" height="15" rx="7" transform="rotate(4 117 337)" />
    </g>
  ),
};

const BACK_PARTS: Record<string, ReactNode> = {
  head: <circle cx="100" cy="46" r="23" />,
  neck: <rect x="91" y="63" width="18" height="22" rx="7" />,
  torsoBack: (
    <path d="M 60 84 C 52 88 48 96 48 106 C 48 140 52 168 60 188 C 66 200 72 206 82 210 L 118 210 C 128 206 134 200 140 188 C 148 168 152 140 152 106 C 152 96 148 88 140 84 Q 100 72 60 84 Z" />
  ),
  traps: (
    <path d="M 100 76 L 138 88 L 132 104 Q 100 112 68 104 L 62 88 Z" />
  ),
  delts: (
    <g>
      <ellipse cx="56" cy="98" rx="11" ry="16" transform="rotate(15 56 98)" />
      <ellipse cx="144" cy="98" rx="11" ry="16" transform="rotate(-15 144 98)" />
    </g>
  ),
  triceps: (
    <g>
      <rect x="42" y="106" width="17" height="54" rx="8" transform="rotate(5 50 133)" />
      <rect x="141" y="106" width="17" height="54" rx="8" transform="rotate(-5 150 133)" />
    </g>
  ),
  forearms: (
    <g>
      <rect x="45" y="156" width="15" height="52" rx="7" transform="rotate(-3 52 182)" />
      <rect x="140" y="156" width="15" height="52" rx="7" transform="rotate(3 148 182)" />
    </g>
  ),
  hands: (
    <g>
      <circle cx="51" cy="211" r="9" />
      <circle cx="149" cy="211" r="9" />
    </g>
  ),
  lats: (
    <path d="M 66 104 C 78 100 122 100 134 104 L 134 150 C 124 158 76 158 66 150 Z" />
  ),
  lowerBack: <rect x="84" y="156" width="32" height="34" rx="8" />,
  glutes: (
    <path d="M 82 188 Q 100 182 118 188 L 122 212 Q 100 220 78 212 Z" />
  ),
  hamstrings: (
    <g>
      <rect x="70" y="206" width="26" height="74" rx="11" transform="rotate(-3 83 243)" />
      <rect x="104" y="206" width="26" height="74" rx="11" transform="rotate(3 117 243)" />
    </g>
  ),
  calves: (
    <g>
      <rect x="73" y="278" width="22" height="56" rx="10" transform="rotate(-3 84 306)" />
      <rect x="105" y="278" width="22" height="56" rx="10" transform="rotate(3 116 306)" />
    </g>
  ),
  feet: (
    <g>
      <rect x="68" y="330" width="30" height="15" rx="7" transform="rotate(-4 83 337)" />
      <rect x="102" y="330" width="30" height="15" rx="7" transform="rotate(4 117 337)" />
    </g>
  ),
};

const FRONT_PART_ORDER = [
  "torso",
  "head",
  "neck",
  "delts",
  "biceps",
  "forearms",
  "hands",
  "chest",
  "abs",
  "quads",
  "calves",
  "feet",
];

const BACK_PART_ORDER = [
  "torsoBack",
  "head",
  "neck",
  "traps",
  "delts",
  "triceps",
  "forearms",
  "hands",
  "lats",
  "lowerBack",
  "glutes",
  "hamstrings",
  "calves",
  "feet",
];

function buildHighlights(main: MuscleGroup, secondary: MuscleGroup[]) {
  const primary = new Set<string>();
  const secondarySet = new Set<string>();
  for (const part of MUSCLE_TO_PARTS[main]) primary.add(part);
  for (const muscle of secondary) {
    for (const part of MUSCLE_TO_PARTS[muscle]) secondarySet.add(part);
  }
  return { primary, secondary: secondarySet };
}

function PartGroup({
  name,
  primary,
  secondary,
  children,
}: {
  name: string;
  primary: Set<string>;
  secondary: Set<string>;
  children: ReactNode;
}) {
  const className = primary.has(name)
    ? "body-part is-primary"
    : secondary.has(name)
      ? "body-part is-secondary"
      : "body-part";
  return <g className={className}>{children}</g>;
}

export function BodyFigure({
  mainMuscle,
  secondaryMuscles,
}: {
  mainMuscle: MuscleGroup;
  secondaryMuscles: MuscleGroup[];
}) {
  const { primary, secondary } = buildHighlights(mainMuscle, secondaryMuscles);
  const renderPart = (name: string) => (
    <PartGroup key={name} name={name} primary={primary} secondary={secondary}>
      {FRONT_PARTS[name] ?? BACK_PARTS[name]}
    </PartGroup>
  );

  return (
    <svg
      className="body-figure"
      viewBox="0 0 430 400"
      role="img"
      aria-label="Human figure highlighting targeted muscle groups"
    >
      <g className="body-view">
        <title>Front</title>
        {FRONT_PART_ORDER.map(renderPart)}
      </g>
      <g className="body-view" transform="translate(215 0)">
        <title>Back</title>
        {BACK_PART_ORDER.map(renderPart)}
      </g>
    </svg>
  );
}
