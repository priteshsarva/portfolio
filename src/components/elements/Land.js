import React from 'react'

const Land = (props) => {
    return (
        <div className="land">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1134.57 155.93"
                {...props}
            >
                <g
                    data-name="Layer 2"
                    style={{
                        isolation: "isolate",
                    }}
                >
                    <g data-name="Layer 1">
                        <path
                            d="M1134.57 0v155.93H0V4.87l537.55-2.31 161.66-.69 26.17-.12L1134.57 0z"
                            style={{
                                fill: "#ffc67a",
                            }}
                        />
                        <path
                            d="M822.24 1.33 743.14 9 0 48.01V36.17l699.21-34.3 123.03-.54z"
                            style={{
                                opacity: 0.2,
                                fill: "#ffa06b",
                                mixBlendMode: "multiply",
                            }}
                        />
                        <path
                            d="M1042 54.73 0 78.58V65.04l1011.75-35.65L1042 54.73z"
                            style={{
                                opacity: 0.25,
                                fill: "#ffa06b",
                                mixBlendMode: "multiply",
                            }}
                        />
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Land