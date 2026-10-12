/** Stable, bounded ink coverage and edge treatments for live text only. */
export function PrintEffects() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      focusable="false"
      className="print-definitions"
    >
      <defs>
        <filter
          id="print-ink-edge"
          x="-4%"
          y="-8%"
          width="108%"
          height="116%"
          colorInterpolationFilters="sRGB"
        >
          <feMorphology
            in="SourceGraphic"
            operator="dilate"
            radius="0.12"
            result="ink"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.08 0.55"
            numOctaves="2"
            seed="11"
            result="edge"
          />
          <feDisplacementMap
            in="ink"
            in2="edge"
            scale="1"
            xChannelSelector="R"
            yChannelSelector="G"
            result="printed"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            seed="23"
            result="coverage"
          />
          <feColorMatrix
            in="coverage"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  .333 .333 .333 0 0"
          />
          <feComponentTransfer result="voids">
            <feFuncA type="linear" slope="8" intercept="-4.1" />
          </feComponentTransfer>
          <feComponentTransfer in="voids" result="ink-coverage">
            <feFuncA type="linear" slope="0.4" />
          </feComponentTransfer>
          <feComposite in="printed" in2="ink-coverage" operator="out" />
        </filter>
        <filter
          id="print-letterpress"
          x="-4%"
          y="-8%"
          width="108%"
          height="116%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.11 0.6"
            numOctaves="2"
            seed="7"
            result="edge"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="edge"
            scale="0.65"
            xChannelSelector="R"
            yChannelSelector="G"
            result="printed"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            seed="17"
            result="coverage"
          />
          <feColorMatrix
            in="coverage"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  .333 .333 .333 0 0"
          />
          <feComponentTransfer result="voids">
            <feFuncA type="linear" slope="5" intercept="-2.65" />
          </feComponentTransfer>
          <feComponentTransfer in="voids" result="ink-coverage">
            <feFuncA type="linear" slope="0.28" />
          </feComponentTransfer>
          <feComposite in="printed" in2="ink-coverage" operator="out" />
        </filter>
        <filter
          id="print-reading-ink"
          x="-3%"
          y="-5%"
          width="106%"
          height="110%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="2"
            seed="31"
            result="paper"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="paper"
            scale="0.23"
            xChannelSelector="R"
            yChannelSelector="G"
            result="printed"
          />
          <feColorMatrix
            in="paper"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  .025 .025 .025 0 0"
            result="coverage"
          />
          <feComposite in="printed" in2="coverage" operator="out" />
        </filter>
        <filter
          id="print-camera-surface"
          filterUnits="objectBoundingBox"
          primitiveUnits="objectBoundingBox"
          x="0"
          y="0"
          width="1"
          height="1"
          colorInterpolationFilters="sRGB"
        >
          <feImage
            href="/effects/lens-displacement.png"
            x="0"
            y="0"
            width="1"
            height="1"
            preserveAspectRatio="none"
            result="lens"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="lens"
            scale="0.075"
            xChannelSelector="R"
            yChannelSelector="G"
          >
            <animate
              id="camera-lens-breathe"
              attributeName="scale"
              values="0.073;0.078;0.074;0.076;0.073"
              keyTimes="0;.28;.55;.78;1"
              dur="7s"
              begin="indefinite"
              repeatCount="indefinite"
              fill="remove"
              calcMode="spline"
              keySplines=".4 .1 .6 1;.4 .1 .6 1;.4 .1 .6 1;.4 .1 .6 1"
            />
          </feDisplacementMap>
          <feGaussianBlur stdDeviation="0.00024" />
        </filter>
      </defs>
    </svg>
  );
}
