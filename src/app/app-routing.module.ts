import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AgencyComponent } from './agency/agency.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent },
  { path: 'user', component: UserComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
