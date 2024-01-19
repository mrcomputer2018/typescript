// Quais valores pode receber e quais valores pode retornar
interface IMathFunc {
    (x: number, y: number): number;
}

const sum: IMathFunc = (x: number, y: number) => x + y;

const value = sum(2, 2);

console.log(value);


const subtrair: IMathFunc = (x: number, y: number) => x - y;

const valueSub = subtrair(2, 2);

console.log(valueSub);


const sum2 = (x: number, y: number): string => {
    return (x + y).toString();
}

const value2 = sum2(2, 2);

console.log(value2);

// retorno void
const sum3 = (x: number, y: number): void => {
    console.log(x + y);
}

const log = (message: string): void => {
    console.log(message);
}

log("Hello world!!!");
sum3(24, 2);




