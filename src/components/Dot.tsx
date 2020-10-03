import React, { useState  } from 'react';


import getRndInteger from "../functions/getRndInteger";
import getRndRgbColor from "../functions/getRndRgbColor";


function Dot(props: {x: number, y: number}) {


    const [color] = useState(getRndRgbColor);
    const [radius] = useState(getRndInteger(window.innerHeight / 20, window.innerHeight / 10));
    const [opacity] = useState(1);




    return (

                <circle cx={props.x + 4} cy={props.y + 4} r={radius} stroke={`rgba(${color.red}, ${color.green}, ${color.blue}, ${opacity})`} fill={"none"} pointerEvents='visible' strokeWidth="4" />

    );
}

export default Dot;