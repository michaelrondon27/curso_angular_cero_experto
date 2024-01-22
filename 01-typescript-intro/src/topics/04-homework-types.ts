/**
 * Código de TypeScript
 */

interface Superhero {
    address: Address;
    age: number;
    name: string;
    showAddress: () => string;
}

interface Address {
    city: string;
    country: string;
    street: string;
}

const superhero: Superhero = {
    address: {
        country: 'USA',
        city: 'NY',
        street: 'Main St'
    },
    age: 30,
    name: 'Spiderman',
    showAddress() {
        return `${ this.name }, ${ this.address.city }, ${ this.address.country }`;
    }
}

const address = superhero.showAddress();
console.log( address );

export {}