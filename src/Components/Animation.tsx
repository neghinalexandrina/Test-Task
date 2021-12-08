import React from "react";
import { Spring, animated, useSpring } from 'react-spring';

const Animation = () => {

    const props = useSpring({
        from: {
            opacity: 0, marginTop: -500
        },
        to: { opacity: 1, marginTop: 0 }
    });

    return (

        <animated.div style={{...props}}>
            <div style={animationStyle}>
                <h1 style={{ color: 'white', fontFamily: 'Arial' }}>Animation</h1>
                <p>Hi! My name is Alexandrina. I have a great time coding!</p>
            </div>
        </animated.div>


    )
}

const animationStyle = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem',
    fontFamily: 'Arial'
}

export default Animation;