/**
 * Adds together two numbers
 * @param a - the first number to add
 * @param b - the second number to add
 * @returns the total
 */
function sum(a: number, b: number): number {
    return a + b;
}

export function concatStringAndNum(str: string, num: number): [string, number]{
    return [str, num]
}

export function findBigNumbers(numArray: number[]): number[]{
    return numArray.filter((num)=>num > 1000)
}

export function findFirstBigNumber(numArray: number[]): number|null{
    return numArray.find((num)=>num > 1000)??null
}

export { sum };
