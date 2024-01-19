// tipos basicos
let age: number = 5

const firstName : string = 'John'

const isAdult: boolean = true

console.log(age)
console.log(firstName)
console.log(isAdult)

// Listas
const ages: number[] = [33, 28, 11]
const ids: Array<string> = ['abc', 'def', 'ghi']
const boleans: boolean[] = [true, false, true]

// Tuplas
let person: [string, number, boolean] = ['John', 33, true]

// lista de tuplas
let employee: [string, number][] = [
    ['John', 33],
    ['Mary', 22],
    ['Bill', 44]
]

// intersections - pode ser um tipo  ou outro tipo
const productId: string | number = '22'

//enums
enum Colors {
    white = '#fff',
    black = '#000'
}

const white: Colors = Colors.white
const black: Colors = Colors.black

console.log(white)
console.log(black)

// Type assertions - mudar o tipo de uma variavel
const input = document.getElementById('input') as HTMLInputElement

const productName: any = 'Computador'

let temId = (productName as string).toUpperCase()
let itemId2 = (<string>productName).toUpperCase()

console.log(temId)
typeof temId
console.log(itemId2)
typeof itemId2
