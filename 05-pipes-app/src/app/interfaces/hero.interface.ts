export enum Color {
    black,
    blue,
    green,
    red
}

export const ColorMap = {
    [Color.black]: '#424242',
    [Color.blue] : '#64B5F6',
    [Color.green]: '#81C784',
    [Color.red]  : '#E57373'
};

export enum Creator {
    DC,
    Marvel
}

export interface Hero {
    canFly : boolean;
    color  : Color;
    creator: Creator;
    id     : number;
    name   : string;
}
