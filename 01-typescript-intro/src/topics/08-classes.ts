export class Person {
    // private address: string;
    // public name: string;

    constructor(
        public name: string,
        private address: string = 'No Address'
    ) { }
}

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, 'New York');
    }
}

const ironman = new Hero('Ironman', 45, 'Tony Stark');

console.log(ironman);
