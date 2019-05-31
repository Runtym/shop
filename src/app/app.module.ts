import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './signin/signin.component';
import { AuthInterceptor } from './auth-interceptor';
import { ArrowFuncComponent } from './arrow-func/arrow-func.component';
import { MenuComponent } from './menu/menu.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    TestComponent,
    UserComponent,
    SigninComponent,
    ArrowFuncComponent,
    MenuComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
