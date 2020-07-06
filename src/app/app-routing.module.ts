import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {path: "register",
  component: RegisterComponent
},
{
  path: "create",
  component: CreateProductComponent
},
{
  path: "list",
  component: ProductListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
