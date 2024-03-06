import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { AddProductComponent } from './pages/add-product/add-product.component';


export const routes: Routes = [
   {path:"products",component:ProductsComponent},
   {path:"addproduct",component:AddProductComponent},
   {path:"users",component:UsersComponent}
];
