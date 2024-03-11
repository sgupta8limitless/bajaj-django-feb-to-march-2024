import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { UpdateProductComponent } from './pages/admin/update-product/update-product.component';


export const routes: Routes = [
   {path:"",component:ProductsComponent},
   {path:"products",component:ProductsComponent},
   {path:"addproduct",component:AddProductComponent},
   {path:"users",component:UsersComponent},
   // admin routes 
   {path:"admin/products",component:AdminProductsComponent},
   {path:"admin/product/update/:id",component:UpdateProductComponent},
];
