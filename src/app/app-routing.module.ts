import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { NoauthGuard } from './noauth.guard';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { PricingComponent } from './pricing/pricing.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';

  const routes: Routes = [
    {path:'', component:DefaultLayoutComponent,canActivate:[NoauthGuard], children:[
      {path:'contact', component:ContactComponent},
      {path:'about', component:AboutUsComponent},
      {path:'login', component:LoginComponent },
    ]},
    {path:'', component:DashboardLayoutComponent, canActivate:[AuthGuard], children:[
      {path:'dashboard', component:DashboardComponent},
      {path:'users', component:UsersComponent},
      {path:'price', component:PricingComponent},
      {path:'product', component:ProductComponent},
    ]},
    {path:'logout',component:LogoutComponent},
    {path:'**', component:NotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
