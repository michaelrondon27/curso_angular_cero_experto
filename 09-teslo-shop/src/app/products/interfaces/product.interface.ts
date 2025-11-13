// Interfaces
import { User } from "@auth/interfaces/user.interface";

export enum Gender {
    kid    = 'kid',
    men    = 'men',
    unisex = 'unisex',
    women  = 'women'
}

export interface GetProudctsParams {
    gender?: string;
    limit? : number;
    offset?: number;
}

export interface Product {
    description: string;
    gender     : Gender;
    id         : string;
    images     : string[];
    price      : number;
    sizes      : Size[];
    slug       : string;
    stock      : number;
    tags       : string[];
    title      : string;
    user       : User;
}

export interface ProductsResponse {
    count   : number;
    pages   : number;
    products: Product[];
}

export enum Size {
    l   = 'l',
    m   = 'm',
    s   = 's',
    xl  = 'xl',
    xs  = 'xs',
    xxl = 'xxl'
}
