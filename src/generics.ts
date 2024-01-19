const returnValue = (value: any): any => value

const message = returnValue('Hello World')
const count = returnValue(123)

//Rcebendo um generic como parametro
// T e um parametro generico
const returnValue2 = <T>(value: T): T => value

// retornando uma string
const message2 = returnValue2<string>('Hello World')
// retornando um number
const count2 = returnValue2<number>(123)

const returnArray = <T>(...args: T[]): T[] => args


// Generics com functions
function getFirstValueArray <Type>(array: Type[]) {
    return array[0]
}

const firstValueFromStringArray = getFirstValueArray<string>(['João', 'Maria', 'José'])
const firstValueFromNumberArray = getFirstValueArray<number>([1, 2, 3])

// Promises com Generics
const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 2000)
})

const returnPromise = async (): Promise<number> => {
    return 5;
}

const returnPromiseString = async (): Promise<string> => {
    return "Hello World";
}

const returnPromiseBoolean = async (): Promise<boolean> => {
    return true;
}


//Generics com classes
class Queue<Type> {
    private data: Type[] = []

    push(item: Type) {
        this.data.push(item)
    }

    pop() {
        this.data.shift()
    }
}

class GenericNumber<Type> {
    zeroValue: Type
    sum: (x: Type, y:Type) => Type

    constructor(zeroValue: Type, sum: (x: Type, y:Type) => Type) {
        this.zeroValue = zeroValue
        this.sum = sum
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => x + y)
const myGenericString = new GenericNumber<string>("", (x: string, y: string) => x + y)
