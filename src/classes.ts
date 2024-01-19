interface IPerson {
    // nao conseguimos colooar o proteted aqui
    id: number;
    sayMyName(): string;
}

class Person implements IPerson{
    readonly id: number; // somente leitura
    protected name: string; // somente a classe e as classes que herdam podem acessar
    private age: number; // somente a classe pode acessar

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string {
        return (`My name is ${this.name}`);
    }

    sayMyAge(): string {
        return (`I am ${this.age} years old`);
    }
}

const personTwo = new Person(1, "João", 27);


// Subclasses - Herança
class Employee extends Person {
    private salary: number;

    constructor(id: number, name: string, age: number, salary: number) {
        super(id, name, age);
        this.salary = salary;
    }

    sayMySalary(): string {
        return (`My salary is ${this.salary}`);
    }
}