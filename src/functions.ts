const sum = (x: number, y: number) => x + y;

const value = sum(2, 2);

console.log(value);


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

