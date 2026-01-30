export function BlurCloud() {
  return (
    <svg
      viewBox="0 0 1074 1257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -z-10 pointer-events-none"
    >
      <g filter="url(#filter0_f)">
        <ellipse
          cx="1043.5"
          cy="547"
          rx="643.5"
          ry="310"
          fill="url(#paint0_linear)"
          fillOpacity="0.76"
        />
      </g>
      <defs>
        <filter
          id="filter0_f"
          x="0"
          y="-163"
          width="2087"
          height="1420"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="200"
            result="effect1_foregroundBlur"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="1043.5"
          y1="237"
          x2="1043.5"
          y2="857"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFF7" stopOpacity="0.9" />
          <stop offset="1" stopColor="#0011FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
