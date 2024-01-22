export class Person {
    public address: string;
    public name: string;

    constructor() {
        this.address = 'Madrid';
        this.name = 'Michael';
    }
}

const ironman = new Person();

console.log(ironman);
