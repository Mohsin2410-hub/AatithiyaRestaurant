import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError } from "rxjs";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { throwError } from "rxjs";
import { token } from "./globals";

export const custInterceptor: HttpInterceptorFn = (req, next) => {
    const router = inject(Router);
    const cloneReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${token()}`
        }
    })

    console.log("Perfect token passing")
    
    return next(cloneReq).pipe(
        catchError((err: HttpErrorResponse) => {
            if (err.status === 401 || err.status === 403)
            {
                localStorage.removeItem('token');
                router.navigate(['/'])
            }
            return throwError(() => err);
        })
    );
}