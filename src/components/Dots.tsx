import React from 'react';



function Dots(props: {dots: JSX.Element[]}) {


    return (
        <React.Fragment>
            {props.dots}
        </React.Fragment>
    );
}

export default Dots;