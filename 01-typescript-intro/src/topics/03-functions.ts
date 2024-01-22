function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => `${a + b}`;

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multipleResult: number = multiply(5);

// console.log({result, result2, multipleResult});

interface Character {
    hp: number;
    name: string;
    showHp: () => void
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    hp: 50,
    name: 'Strider',
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`)
    }
}

healCharacter(strider, 10);

strider.showHp();

export {}
