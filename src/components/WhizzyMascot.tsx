import React from "react";

interface WhizzyMascotProps {
  size?: number;
  className?: string;
  mood?: "cheer" | "wave" | "sad" | "happy" | "none";
  expression?: "happy" | "wink" | "focused" | "surprised" | "cheer" | "sad";
}

export const WhizzyMascot: React.FC<WhizzyMascotProps> = ({
  size = 80,
  className = "",
  mood,
  expression,
}) => {
  // Support both mood and expression props
  const resolvedMood = mood || (expression === "cheer" ? "cheer" : expression === "sad" ? "sad" : "wave");
  const isSad = resolvedMood === "sad";
  const isCheer = resolvedMood === "cheer";
  const isWave = resolvedMood === "wave";
  const isWink = expression === "wink";
  const isSurprised = expression === "surprised";

  const armStyle = { fill: "#58CC02", stroke: "#3F9400", strokeWidth: 2 };

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Whizzy, the oohwheels mascot"
    >
      {/* Arms */}
      {isWave && (
        <g className="ow-wave">
          <rect x="94" y="58" width="14" height="32" rx="7" {...armStyle} />
        </g>
      )}
      {isCheer && (
        <>
          <rect
            x="4"
            y="14"
            width="14"
            height="36"
            rx="7"
            {...armStyle}
            transform="rotate(-18 11 32)"
          />
          <rect
            x="102"
            y="14"
            width="14"
            height="36"
            rx="7"
            {...armStyle}
            transform="rotate(18 109 32)"
          />
        </>
      )}

      {/* Outer tire */}
      <circle cx="60" cy="60" r="50" fill="#1F2D24" />
      {/* Tire tread dash */}
      <circle
        cx="60"
        cy="60"
        r="43"
        fill="none"
        stroke="#3A4B40"
        strokeWidth="3"
        strokeDasharray="5 5"
      />
      {/* Rim / Face */}
      <circle
        cx="60"
        cy="60"
        r="31"
        fill="#58CC02"
        stroke="#3F9400"
        strokeWidth="2"
      />

      {/* Eyes */}
      {isWink ? (
        <>
          <path
            d="M44 54 Q50 48 56 54"
            stroke="#12261A"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="70" cy="54" rx="6" ry="8" fill="#fff" />
          <circle cx="71" cy="56" r="3.6" fill="#12261A" />
          <circle cx="72.4" cy="54.4" r="1.2" fill="#fff" />
        </>
      ) : (
        <>
          <ellipse cx="50" cy="54" rx="6" ry="8" fill="#fff" />
          <ellipse cx="70" cy="54" rx="6" ry="8" fill="#fff" />
          <circle cx="51" cy={isSad ? 58 : 56} r="3.6" fill="#12261A" />
          <circle cx="71" cy={isSad ? 58 : 56} r="3.6" fill="#12261A" />
          <circle cx="52.4" cy="54.4" r="1.2" fill="#fff" />
          <circle cx="72.4" cy="54.4" r="1.2" fill="#fff" />
        </>
      )}

      {/* Eyebrows / Mouth */}
      {isSad ? (
        <>
          <path
            d="M42 43 L57 38 M63 38 L78 43"
            stroke="#12261A"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M50 78 Q60 69 70 78"
            stroke="#12261A"
            strokeWidth="3.4"
            strokeLinecap="round"
            fill="none"
          />
          <path d="M79 62 q3 5 0 8 q-3 -3 0 -8z" fill="#1CB0F6" />
        </>
      ) : (
        <>
          <path
            d="M42 41 Q50 35 57 39 M63 39 Q70 35 78 41"
            stroke="#12261A"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {isSurprised ? (
            <circle cx="60" cy="72" r="5" fill="#12261A" />
          ) : (
            <path
              d="M47 69 Q60 85 73 69 Z"
              fill="#12261A"
              strokeLinejoin="round"
              stroke="#12261A"
              strokeWidth="2"
            />
          )}
        </>
      )}

      {/* Cheeks */}
      <ellipse cx="41" cy="68" rx="5" ry="3.2" fill="#FF9D8A" />
      <ellipse cx="79" cy="68" rx="5" ry="3.2" fill="#FF9D8A" />
    </svg>
  );
};
