import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { WebCamModule } from 'ack-angular-webcam';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginWithCredentialComponent } from './login-with-credential/login-with-credential.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ExistingUserComponent } from './existing-user/existing-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/*  import { ModalModule } from 'ngx-bootstrap/modal';  */
import { FrDashboardComponent } from './fr-dashboard/fr-dashboard.component';
 /* import { ModalModule } from 'ngb-modal';  */
import { MenulistComponent } from './menulist/menulist.component';
 import {ModalModule} from "ngb-modal"; 
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { HeaderComponent } from './header/header.component';
import {WebcamModule} from 'ngx-webcam';  
import { HttpClientModule } from '@angular/common/http';
import {RestapiService} from './services/restapi/restapi.service';
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
import { ForUserService } from './services/restapi/for-user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; 
@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    LoginWithCredentialComponent,
    CreateAccountComponent,
    ExistingUserComponent,
    FrDashboardComponent,
    MenulistComponent,
    OrderComponent,
    CheckoutComponent,
    OrderTrackingComponent,
    HeaderComponent,
    
ScramblesComponent,
OmelettesComponent,
OatmealComponent,
GriddlesComponent,
SandwichesComponent,
SaladsComponent,
SoupsComponent,
SkilletsComponent,
VeggieComponent,
VeganComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    NgbModule,
    HttpClientModule,
    WebcamModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RestapiService,ForUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

