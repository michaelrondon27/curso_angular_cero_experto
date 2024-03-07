export interface SingleUserResponse {
    data: User;
    support: Support;
}

export interface User {
    avatar: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
}

export interface Support {
    text: string;
    url: string;
}
