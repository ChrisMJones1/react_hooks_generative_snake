function getRndInteger(min: number, max: number, isInclusive: boolean = false): number {
    if(isInclusive) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    } else {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

}
export default getRndInteger;