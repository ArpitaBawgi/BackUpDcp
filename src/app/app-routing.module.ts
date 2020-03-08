import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginWithCredentialComponent } from './login-with-credential/login-with-credential.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ExistingUserComponent } from './existing-user/existing-user.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FrDashboardComponent } from './fr-dashboard/fr-dashboard.component';
import { MenulistComponent } from './menulist/menulist.component';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import {ScramblesComponent} from './scrambles/scrambles.component';
import {OmelettesComponent } from './omelettes/omelettes.component';
import { OatmealComponent } from './oatmeal/oatmeal.component';
import { GriddlesComponent } from './griddles/griddles.component';
import { SandwichesComponent } from './sandwiches/sandwiches.component';
import { SoupsComponent } from './soups/soups.component';
import { SaladsComponent } from './salads/salads.component';
import { SkilletsComponent } from './skillets/skillets.component';
import { VeganComponent } from './vegan/vegan.component';
import { VeggieComponent } from './veggie/veggie.component'; 




const routes: Routes = [
  
  {
    path:'login-credentials' , component : LoginWithCredentialComponent
  },
  {
    path:'', component: NewUserComponent
  },
  {
    path:'existing-user' , component: ExistingUserComponent
  },
  {
    path:'create-account' , component: CreateAccountComponent
  },
  {
    path:'cancel' , component: NewUserComponent
  },
  {
    path:'dashboard' , component: FrDashboardComponent
  },
  {
    path:'menu' , component: MenulistComponent
  },
  {
    path:'order' , component: OrderComponent
  },
  {
    path:'checkout' , component: CheckoutComponent
  },
  {
    path:'order-track' , component: OrderTrackingComponent
  },
  
  { path: 'scramble', component: ScramblesComponent
},

{ path: 'omelette',component: OmelettesComponent
},
{
path: 'oatmeal',component: OatmealComponent
},
{
path: 'griddle',component: GriddlesComponent
},
{
path: 'sandwich',component: SandwichesComponent
},
{
path: 'soups',component: SoupsComponent
},
{
path: 'salad', component: SaladsComponent
},
{
path: 'skillet',component: SkilletsComponent
},
{
path: 'vegan' , component: VeganComponent
},
{
path:'veggie', component: VeggieComponent
} 

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
