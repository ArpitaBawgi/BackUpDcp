import { Component, OnInit } from '@angular/core';
import {ForUserService} from '../services/restapi/for-user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';

import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

form: FormGroup;
  

loading : boolean= false;


  userdata={

    "FaceImage" : '',
"Name": '',
"Gender": "Female",
"lastname" : "",
"Email": "",
"ContactNo": "",
"isVeg":false,
"twiID":'',
"orders" :[
  { id: 100, name: 'Peanuts' },
  { id: 200, name: 'Garlic' },
  { id: 300, name: 'Seasame' },
  { id: 400, name: 'Fish' },
  { id: 300, name: 'Sugar' },
  { id: 400, name: 'Vegetrian' }
],

  }

 errorMsg : String;

  constructor(private register : ForUserService, private router: Router, private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group({
    orders : new FormArray([])
    });

    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.userdata.orders.map((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.orders as FormArray).push(control);
    });
  }

 /*  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((v, i) => v ? this.orders[i].name : null)
      .filter(v => v !== null);
    console.log(selectedOrderIds);
  } */
   


  getFormRegisterData(){ 
     this.loading= true;
   this.userdata.FaceImage = localStorage.getItem("loggedInUserImg"); 
     console.log("userdata:",this.userdata);  
     console.log("uyjalkha");
    this.userRegister(); 
    // const selectedOrderIds = this.form.value.orders
    //   .map((v, i) => v ? this.userdata.orders[i].name : null)
    //   .filter(v => v !== null);
    //   this.userdata.orders=selectedOrderIds
    // console.log(selectedOrderIds);
    } 

    userRegister() :void{
      this.register.userRegistration(this.userdata).subscribe((res) => {
        /* console.log(this.userdata); */
        if(res.statusCode == 200){
          /* localStorage.setItem("selectedModule","home"); */
          localStorage.setItem("Name",this.userdata.Name);
          localStorage.setItem("faceId",res.body.FaceId);        
           localStorage.setItem("loggedInUserData",JSON.stringify(res.body)); 
        }
        localStorage.setItem("isUserRegistered","false");
        this.optOut();  
      }, 
       err  => this.errorMsg = <any>err);
    
    }
    optOut():void{
      /* localStorage.setItem("selectedModule","home");   
      localStorage.setItem("selectedModuleTitle","Recommendation To Order");  */
      localStorage.setItem("Name",this.userdata.Name); 
      localStorage.setItem("lastname",this.userdata.lastname); 

      console.log("this.userdata");
      console.log("successfull finally")
      this.router.navigateByUrl('/dashboard');
     // window.location.reload();
    }

  ngOnInit() {
  }

}
