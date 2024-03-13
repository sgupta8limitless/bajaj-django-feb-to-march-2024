import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { UpdateProductComponent } from './pages/admin/update-product/update-product.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProfileComponent } from './pages/users/profile/profile.component';
import { CartComponent } from './pages/users/cart/cart.component';


export const routes: Routes = [
   {path:"",component:ProductsComponent},
   {path:"products",component:ProductsComponent},
   {path:"users",component:UsersComponent,children:[
      {path:"profile",component:ProfileComponent},
      {path:"cart",component:CartComponent}
   ]},
   // admin routes 
   {path:"admin/products",component:AdminProductsComponent},
   {path:"admin/product/add",component:AddProductComponent},
   {path:"admin/product/update/:id",component:UpdateProductComponent},
   {path:"**",component:NotfoundComponent}
];
