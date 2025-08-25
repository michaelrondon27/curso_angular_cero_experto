export interface CapitalInfo {
    latlng: number;
}

export interface Car {
    side : string;
    signs: string[];
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export interface Currency {
    name  : string;
    symbol: string;
}

export interface Demonyms {
    eng : Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    alt?: string;
    png : string;
    svg : string;
}

export interface Idd {
    root    : string;
    suffixes: string[];
}

export interface Languages {
    ber?: string;
    bjz?: string;
    cat?: string;
    deu?: string;
    eng?: string;
    fin?: string;
    fra?: string;
    hin?: string;
    mey?: string;
    mri?: string;
    nld?: string;
    nrf?: string;
    nzs?: string;
    spa?: string;
    srp?: string;
    swe?: string;
    tam?: string;
}

export interface Maps {
    googleMaps    : string;
    openStreetMaps: string;
}

export interface Name {
    common    : string;
    nativeName: { [key: string]: Translation };
    official  : string;
}

export interface PostalCode {
    format: string;
    regex : string;
}

export interface RestCountry {
    altSpellings: string[];
    area        : number;
    borders?    : string[];
    capital     : string[];
    capitalInfo : CapitalInfo;
    car         : Car;
    cca2        : string;
    cca3        : string;
    ccn3        : string;
    cioc?       : string;
    coatOfArms  : CoatOfArms;
    continents  : string[];
    currencies  : { [key: string]: Currency };
    demonyms    : Demonyms;
    fifa?       : string;
    flag        : string;
    flags       : Flags;
    gini?       : { [key: string]: number };
    idd         : Idd;
    independent : boolean;
    landlocked  : boolean;
    languages   : Languages;
    latlng      : number[];
    maps        : Maps;
    name        : Name;
    populatoin  : number;
    postalCode? : PostalCode;
    region      : string;
    startOfWeek : string;
    status      : string;
    subregion   : string;
    timezones   : string[];
    translations: { [key: string]: Translation };
    tld         : string[];
    unMember    : boolean;
}

export interface Translation {
    common  : string;
    official: string;
}
