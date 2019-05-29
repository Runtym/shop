import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { RouterGuardService } from './router-guard.service';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',  
    component:MainComponent,
    canActivate:[RouterGuardService]
  },
  {
    path:'test',
    component:TestComponent,
    canActivate:[RouterGuardService]
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'signin',
    component:SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
