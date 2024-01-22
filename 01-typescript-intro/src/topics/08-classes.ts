export class Person {
    // private address: string;
    // public name: string;

    constructor(
        private address: string = 'No Address',
        public name: string
    ) { }
}

const ironman = new Person('New York', 'Ironman');

console.log(ironman);
