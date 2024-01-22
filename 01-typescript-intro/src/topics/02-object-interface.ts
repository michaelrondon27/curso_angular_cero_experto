const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    hometown?: string;
    hp: number;
    name: string;
    skills: string[];
}

const strider: Character = {
    hp: 100,
    name: 'Strider',
    skills: ['Bash', 'Counter']
}

strider.hometown = 'Rivendell';

console.table(strider);

export {}
