/**
 * West Bay Capital emblem — SVG recreation of the bird/compass logo mark.
 * A seabird integrated with a compass-like swooping arrow through a circle.
 */

export function WestBayEmblem({
  className = "",
  color = "currentColor",
  accentColor,
}: {
  className?: string;
  color?: string;
  accentColor?: string;
}) {
  const accent = accentColor || color;

  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main circle — open on upper-right where bird/arrow intersect */}
      <path
        d="M 155 68 A 62 62 0 1 1 82 68"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.85"
        fill="none"
      />

      {/* Swooping arrow — enters from upper-right, curves through circle, exits lower-left */}
      <path
        d="M 200 28 C 175 42, 148 62, 125 88 C 105 110, 78 138, 42 168"
        stroke={accent}
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Arrow head — upper right (pointing out) */}
      <polygon
        points="200,28 186,30 190,42"
        fill={accent}
      />

      {/* Arrow head — lower left (pointing out) */}
      <polygon
        points="42,168 56,160 52,172"
        fill={accent}
      />

      {/* Bird body — sleek seabird flying right, sitting on top of circle */}
      <path
        d="M 72 72 C 80 65, 95 60, 112 62 C 125 63, 138 60, 150 54
           C 142 64, 132 68, 120 67 C 108 66, 94 70, 82 78 Z"
        fill={color}
      />

      {/* Bird — left wing (swept back and up) */}
      <path
        d="M 100 62 C 88 48, 70 32, 48 24"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bird — right wing (swept forward and up) */}
      <path
        d="M 120 60 C 135 48, 155 36, 178 30"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bird head/beak detail */}
      <path
        d="M 150 54 C 155 52, 160 51, 164 50"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
