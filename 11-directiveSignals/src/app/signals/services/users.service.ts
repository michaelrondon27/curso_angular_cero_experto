import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

// Interfaces
import { SingleUserResponse, User } from "../interfaces/user-request.interface";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private httpClient = inject(HttpClient);

    private baseUrl = 'https://reqres.in/api/users';

    getUserById(id: number): Observable<User> {
        return this.httpClient.get<SingleUserResponse>(`${ this.baseUrl }/${ id }`)
            .pipe(
                map(response => response.date)
            );
    }

}
