export enum Region {
    Africa   = 'Africa',
    Americas = 'Americas',
    Asia     = 'Asia',
    Europe   = 'Europe',
    Oceania  = 'Oceania'
}

export interface Country {
    name   : string;
    cca3   : string;
    borders: string[];
}
