import React, { useState } from 'react';
import './App.css';
import Dot from './components/Dot';

import Dots from "./components/Dots";


function App() {
    const [dots, setDots] = useState<JSX.Element[]>([]);

    const [count, setCount] = useState(1);

    const [screenSize, setScreenSize] = useState({x: document.documentElement.clientWidth, y: document.documentElement.clientHeight});


    const updateScreenSize = () => {
        setScreenSize({x: document.documentElement.clientWidth, y: document.documentElement.clientHeight});
    };

    window.addEventListener('resize', updateScreenSize);




    const _onMouseMove = (e: { clientX: number; clientY: number; }) => {

        let newElement = dots;
        setCount(count + 1);


        newElement.push(<Dot key={count} x={e.clientX} y={e.clientY} />);
        if(newElement.length > 100) {
            newElement.shift();
        }
        setDots(newElement);
    };

    const _onTouchMove = (event: React.TouchEvent) => {

        let newElement = dots;


        for (let i = 0; i < event.touches.length; i++) {
            let touch = event.touches[i];
            setCount(count + 1);
            newElement.push(<Dot key={count} x={touch.pageX} y={touch.pageY} />);
            if(newElement.length > 100) {
                newElement.shift();
            }
        }


        setDots(newElement);
    };


    return (


    <svg onMouseMove={_onMouseMove} onTouchMove={_onTouchMove} className="App" style={{width: screenSize.x, height: screenSize.y}}>
        <Dots dots={dots}/>
    </svg>
  );
}

export default App;
