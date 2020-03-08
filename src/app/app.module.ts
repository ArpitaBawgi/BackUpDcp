import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ComponentAnalysisComponent } from './component-analysis/component-analysis.component';
import { IotDashboardComponent } from './iot-dashboard/iot-dashboard.component';
// import { FiltersComponent } from './filters/filters.component';
import { ComphistoryComponent } from './comphistory/comphistory.component';
// import { ModalsComponent } from './modals/modals.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {HeaderComponent} from './header/header.component';
import {TableComponent} from './table/table.component';
import { DashboardIotComponent } from './dashboard-iot/dashboard-iot.component';
import {FiltersService} from './filters.service';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'; 
import { IotComponent } from './iot/iot.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent, TableComponent,
    ComponentAnalysisComponent,
    IotDashboardComponent,
    IotComponent,
    // IotComponent,


    ComphistoryComponent,
    DashboardIotComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    NgbModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    DragDropModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   
    
    
  ],
  providers: [FiltersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
