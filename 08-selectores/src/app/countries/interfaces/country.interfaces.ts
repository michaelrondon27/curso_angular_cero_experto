export enum Region {
    Africa   = 'Africa',
    Americas = 'Americas',
    Asia     = 'Asia',
    Europe   = 'Europe',
    Oceania  = 'Oceania'
}

export interface Country {
    borders?:     string[];
    cca3:         string;
    name:         Name;
    region:       string;
}

export interface Name {
    common:     string;
    nativeName: { [key: string]: Translation };
    official:   string;
}

export interface Translation {
    common:   string;
    official: string;
}
