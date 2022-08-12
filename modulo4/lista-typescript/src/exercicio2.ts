var jogos: (baseValue: number, increment: number) => number = function (number1: number, number2: number): number {
    return number1 + number2;
};

var value: number = jogos(350, 299);
console.log("sum", value);
