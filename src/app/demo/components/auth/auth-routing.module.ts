import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
        { path: 'reset', loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule) },
        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
