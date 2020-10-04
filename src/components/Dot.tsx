import React, { useState, useEffect  } from 'react';


import getRndInteger from "../functions/getRndInteger";
import getRndRgbColor from "../functions/getRndRgbColor";


function Dot(props: {x: number, y: number}) {


    const [color] = useState(getRndRgbColor);
    const [radius, setRadius] = useState(getRndInteger(window.innerHeight / 80, window.innerHeight / 50));
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        if(opacity > 0) {
            setOpacity(opacity - 0.01);
            setRadius(radius + 0.5);
        }
    }, [opacity, radius]);


    return (

                <circle cx={props.x + 4} cy={props.y + 4} r={radius} stroke={`rgba(${color.red}, ${color.green}, ${color.blue}, ${opacity})`} fill={"none"} pointerEvents='visible' strokeWidth="4" />

    );
}

export default Dot;