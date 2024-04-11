import { Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { FoodsComponent } from './food/foods/foods.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"foods",component:FoodsComponent,canActivate:[authGuard]}
];
