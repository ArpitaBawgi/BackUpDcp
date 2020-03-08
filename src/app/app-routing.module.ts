import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IotDashboardComponent } from './iot-dashboard/iot-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ComponentAnalysisComponent } from './component-analysis/component-analysis.component';
import { IotComponent } from './iot/iot.component';
import { ComphistoryComponent } from './comphistory/comphistory.component';
import { DashboardIotComponent } from './dashboard-iot/dashboard-iot.component';


const routes: Routes = [
  {
    path: '' , component : LoginComponent
    },
    {
      path: 'iot', component: IotComponent
    },
  {
    path: 'dashboard-iot' , component : DashboardIotComponent
    },
    {
      path: 'component-analysis' , component : ComponentAnalysisComponent
    },
    {
      path: 'login-page' , component : LoginComponent
    },
    
    {
      path: 'comphistory' , component : ComphistoryComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
