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
    passowrd?: string;
    apples: string[];
    orders: Order[];
};

const user: User = {
    firstName: "João",
    age: 27,
    occupation: "Developer",
    email: "",
    passowrd: "12345",
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

user.passowrd
