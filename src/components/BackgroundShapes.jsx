export default function BackgroundShapes({ primaryColor, accentColor }) {
  return (
    <svg
      className="background-shapes"
      viewBox="0 0 1080 1080"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="0.5" />
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accentColor} stopOpacity="0.45" />
          <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="0.35" />
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Big bold circles — overlapping, Spotify-style */}
      <circle cx="150" cy="120" r="350" fill={primaryColor} opacity="0.18" />
      <circle cx="-50" cy="300" r="280" fill={accentColor} opacity="0.14" />
      <circle cx="950" cy="-80" r="320" fill={accentColor} opacity="0.2" />
      <circle cx="1100" cy="150" r="250" fill={primaryColor} opacity="0.12" />
      <circle cx="900" cy="850" r="380" fill={primaryColor} opacity="0.15" />
      <circle cx="1050" cy="1000" r="200" fill={accentColor} opacity="0.18" />
      <circle cx="-60" cy="900" r="260" fill={accentColor} opacity="0.12" />

      {/* Glowing soft blobs behind circles */}
      <circle cx="200" cy="200" r="500" fill="url(#glow1)" />
      <circle cx="880" cy="100" r="400" fill="url(#glow2)" />
      <circle cx="850" cy="900" r="450" fill="url(#glow3)" />

      {/* Medium floating circles */}
      <circle cx="500" cy="80" r="120" fill={primaryColor} opacity="0.1" />
      <circle cx="700" cy="500" r="100" fill={accentColor} opacity="0.08" />
      <circle cx="200" cy="650" r="140" fill={primaryColor} opacity="0.07" />
      <circle cx="580" cy="950" r="110" fill={accentColor} opacity="0.09" />

      {/* Small scattered dots */}
      {[
        [320, 180, 6], [780, 250, 5], [500, 120, 4], [130, 500, 7],
        [860, 480, 5], [420, 780, 6], [680, 700, 4], [250, 350, 5],
        [950, 350, 6], [100, 780, 4], [600, 600, 3], [750, 900, 5],
        [400, 400, 4], [200, 900, 3], [550, 300, 5], [830, 650, 4],
        [70, 200, 3], [980, 550, 4], [350, 950, 3], [650, 150, 5],
      ].map(([cx, cy, r], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill={i % 3 === 0 ? accentColor : '#ffffff'}
          opacity={0.15 + (i % 4) * 0.08}
        />
      ))}

      {/* Circle outlines — rings */}
      <circle cx="900" cy="200" r="160" fill="none" stroke={accentColor} strokeWidth="2" opacity="0.12" />
      <circle cx="120" cy="180" r="200" fill="none" stroke={primaryColor} strokeWidth="2.5" opacity="0.1" />
      <circle cx="800" cy="800" r="130" fill="none" stroke={primaryColor} strokeWidth="2" opacity="0.08" />

      {/* Bottom wave shapes */}
      <path
        d="M0,900 C200,830 380,920 580,870 C780,820 950,880 1080,850 L1080,1080 L0,1080 Z"
        fill={primaryColor}
        opacity="0.08"
      />
      <path
        d="M0,960 C300,910 500,980 750,940 C950,900 1050,950 1080,930 L1080,1080 L0,1080 Z"
        fill={accentColor}
        opacity="0.06"
      />
    </svg>
  );
}
