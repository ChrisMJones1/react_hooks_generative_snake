import React, { useState, useEffect } from 'react';

import getRndHexColor from "../functions/getRndHexColor";
import getRndInteger from "../functions/getRndInteger";
import getRndRgbColor from "../functions/getRndRgbColor";

interface Color {
    red: number;
    blue: number;
    green: number;
}

interface randomSeed {
    x: number;
    y: number;
    radius: number;
    color: Color
}
//@ts-ignore
function Dot(props) {
    function setRandomSeed():randomSeed {
        const screenWidth: number = window.innerWidth;
        const screenHeight: number = window.innerHeight;

        let randomColor: Color = getRndRgbColor();

        return {x: getRndInteger(0, screenWidth, true), y: getRndInteger(0, screenWidth, true), radius: getRndInteger(1, screenHeight / 100, false), color: randomColor}
    }

    const [color, setColor] = useState(getRndRgbColor);
    // const [x, setX] = useState(getRndInteger(0, window.innerWidth, true));
    // const [y, setY] = useState(getRndInteger(0, window.innerHeight, true));
    const [radius, setRadius] = useState(getRndInteger(window.innerHeight / 20, window.innerHeight / 10));
    const [opacity, setOpacity] = useState(1);




    return (

                <circle cx={props.x + 4} cy={props.y + 4} r={radius} stroke={`rgba(${color.red}, ${color.green}, ${color.blue}, ${opacity})`} fill={"none"} pointerEvents='visible' strokeWidth="4" />

    );
}

export default Dot;