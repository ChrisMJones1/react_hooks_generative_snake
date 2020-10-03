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
function Dots(props) {


    return (
        <React.Fragment>
            {props.dots}
        </React.Fragment>
    );
}

export default Dots;