import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private _router:Router){
        
    }
    intercept(req: HttpRequest<any>, next: HttpHandler)
    : Observable<HttpEvent<any>>{
        var uiId = localStorage.getItem('uiId');
        var tokken = localStorage.getItem('tokken');
        var headers:HttpHeaders = new HttpHeaders();
        console.log(req);
        if(req.url.indexOf('login')==-1 && 
            req.url.indexOf('signin')==-1 && 
            !tokken){
            this._router.navigate(['/login']);
            return throwError('Auth Error');
        }else if(tokken){
            headers = new  HttpHeaders()
            .set('x-auth-id',uiId)
            .set('x-auth-tokken',tokken);
        }
        const authReq = req.clone({headers});
        return next.handle(authReq);
    }
}
