import getRndInteger from './getRndInteger';

interface Color {
    red: number;
    blue: number;
    green: number;
}

function getRndRgbColor(): Color {

    return {red: getRndInteger(0, (256)), blue: getRndInteger(0, (256)), green: getRndInteger(0, (256))};

}

export default getRndRgbColor;