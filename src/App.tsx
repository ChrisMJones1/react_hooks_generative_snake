import React, {useState, useEffect} from 'react';
import './App.css';
import Dot from './components/Dot';

import Dots from "./components/Dots";

interface Color {
    red: number;
    blue: number;
    green: number;
}

function App() {
    const [mouseHover, setMouseHover] = useState(false);

    const [donnie, setDonnie] = useState('donnie');



    const [dots, setDots] = useState([<Dot key={0} x={30} y={30} />]);
    const [count, setCount] = useState(1);




    const _onMouseMove = (e: { clientX: number; clientY: number; }) => {

        let newElement = dots;
        setCount(count + 1);


        newElement.push(<Dot key={count} x={e.clientX} y={e.clientY} />);
        if(newElement.length > 100) {
            newElement.shift();
        }
        setDots(newElement);
        setDonnie(donnie === 'donnie' ? 'no_donnie' : 'donnie');
    };


    return (


    <svg onMouseMove={_onMouseMove} className="App" style={{width: "100vw", height: "100vh"}}>
        <text x={20} y={20}>{donnie}</text>
        <Dots dots={dots}/>
    </svg>
  );
}

export default App;
