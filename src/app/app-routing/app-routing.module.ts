import { StarterComponent } from './../starter/starter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, PreloadAllModules,  Routes } from '@angular/router';
import { LoginComponent } from '../starter/login/login.component';
import { ProfileComponent } from '../starter/profile/profile.component';
import { RegisterComponent }  from '../starter/register/register.component';
@NgModule({
  imports: [

    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'starter', component: StarterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component:  ProfileComponent},
      {path :'register',component:RegisterComponent}
     
      
    ])
  ],
 exports: [ RouterModule]
})
export class AppRoutingModule { }
