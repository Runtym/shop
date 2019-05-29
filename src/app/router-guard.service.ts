import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate {
  constructor(private _router:Router) {}
  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      console.log(`id:${localStorage.getItem('uiId')}`);
      if(localStorage.getItem('uiId')){
        return true;
      }else{
        this._router.navigate(['login']);
        return false;
      }
  }
}
