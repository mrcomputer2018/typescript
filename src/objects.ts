// Type
type Order = {
    productId: string;
    price: number;
};

type User = {
    firstName: string;
    age: number;
    occupation: string;
    email: string;
    password?: string;
    apples: string[];
    orders: Order[];
};

const user: User = {
    firstName: "João",
    age: 27,
    occupation: "Developer",
    email: "",
    password: "12345",
    apples: ["Macbook Pro", "Iphone 12"],
    orders: [
        {
            productId: "12345",
            price: 100,
        },
        {
            productId: "12346",
            price: 150,
        },
    ],
};

 // ? parametro de função opcional
const printLog = (message?: string) => {}

printLog(user.password)

const printLog2 = (message?: string) => {}

// ! afirma que não é nulo
printLog2(user.password!)


// Unions
type Author = {
    // lista de sttrings
    books: string[]; 
};

//! Vai ter todas as propriedades de autor e usuarios
const author: Author & User = {
    books: ["Harry Potter"],
    firstName: "João",
    age: 27,
    occupation: "Developer",
    email: "author@author.com",
    password: "12345",
    apples: ["Macbook Pro"],
    orders: [
        {
            productId: "12347",
            price: 200,
        },
    ],

}


// Interfaces
interface IUser {
    firstNanme: string;
    email: string;
}

