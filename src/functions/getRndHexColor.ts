import getRndInteger from './getRndInteger';

function getRndHexColor(): string {

    return "#" + (getRndInteger(0, (256))).toString(16).padStart(2, '0') + (getRndInteger(0, (256))).toString(16).padStart(2, '0') + (getRndInteger(0, (256))).toString(16).padStart(2, '0');

}

export default getRndHexColor;