import React from 'react'

const Sun = (props) => {
  return (
    <div className='Sun'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 185 185.71"
        {...props}
      >
        <defs>
          <radialGradient
            id="Sun_svg__a"
            cx={92.5}
            cy={92.86}
            r={92.68}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.04} stopColor="#fff" stopOpacity={0.95} />
            <stop offset={0.25} stopColor="#fff" stopOpacity={0.66} />
            <stop offset={0.45} stopColor="#fff" stopOpacity={0.43} />
            <stop offset={0.63} stopColor="#fff" stopOpacity={0.24} />
            <stop offset={0.78} stopColor="#fff" stopOpacity={0.11} />
            <stop offset={0.91} stopColor="#fff" stopOpacity={0.03} />
            <stop offset={1} stopColor="#fff" stopOpacity={0} />
          </radialGradient>
        </defs>
        <g
          data-name="Layer 2"
          style={{
            isolation: "isolate",
          }}
        >
          <g data-name="Layer 1">
            <ellipse
              cx={92.5}
              cy={92.86}
              rx={92.5}
              ry={92.86}
              style={{
                mixBlendMode: "screen",
                fill: "url(#Sun_svg__a)",
              }}
            />
            <ellipse
              cx={92.5}
              cy={92.86}
              rx={55.43}
              ry={55.65}
              style={{
                fill: "#e8e8fe",
              }}
            />
          </g>
        </g>
      </svg>

    </div>
  );

}

export default Sun