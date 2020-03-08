import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUserName: string;
  imgUrl : String;
  
  constructor() {
    if (localStorage.getItem("Name") != null &&  (localStorage.getItem("Name") !="")) {
      this.loggedInUserName = localStorage.getItem("Name");
    }
    else {
      this.loggedInUserName = localStorage.getItem("Name");
      localStorage.setItem("Name", "Welcome..!!");
    }

    if (localStorage.getItem("loggedInUserImg") != null) {
      this.imgUrl = localStorage.getItem("loggedInUserImg");
    } else {
      this.imgUrl = "assets/img/User_font.png";
    }

   }

  ngOnInit() {
  }

}
