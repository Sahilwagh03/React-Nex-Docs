import React from 'react'
import AnimatedLines from '../AnimatedLines/AnimatedLines'
const AnimatedLinesWrapper = () => {
    return (
        <>
            <AnimatedLines
                width={400}
                height={100}
                gradientColors={["#FFD700", "#FF1493"]} // Example custom gradient colors
                animationConfig={{
                    x1: [0, 400],
                    x2: [0, 200],
                    y1: [100, 60], // Adjusted y1 to move gradient upwards
                    y2: [200, 120], // Adjusted y2 for gradient tail offset
                }}
            />
        </>
    )
}

export default AnimatedLinesWrapper