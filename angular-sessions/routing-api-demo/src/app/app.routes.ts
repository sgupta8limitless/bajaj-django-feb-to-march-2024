import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';


export const routes: Routes = [
   {path:"products",component:ProductsComponent},
   {path:"users",component:UsersComponent}
];
