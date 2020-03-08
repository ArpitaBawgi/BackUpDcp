import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { IotDashboardComponent } from '../iot-dashboard/iot-dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }


  ngOnInit() {
  }

  submit() {
    this.route.navigateByUrl('dashboard-iot');
  }

}
