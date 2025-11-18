import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";

// Services
import { AuthService } from "@auth/services/auth.service";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    const token: string | null = inject(AuthService).token();

    const newReq = req.clone({
        headers: req.headers.append('Authorization', `Bearer ${ token }`)
    });

    return next(newReq);
}
