export interface Passenger {
    children?: string[]
    name: string;
}

const passenger1: Passenger = {
    name: 'Michael'
}

const passenger2: Passenger = {
    children: ['Natalia', 'Elizabeth'],
    name: 'Melissa'
}

const printChildren = (passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

printChildren(passenger1);
printChildren(passenger2);
