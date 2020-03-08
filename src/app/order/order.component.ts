import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef,
  NgbModule,
  } from '@ng-bootstrap/ng-bootstrap'; 
import { CheckoutComponent } from '../checkout/checkout.component';
import { RestapiService } from '../services/restapi/restapi.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  [x: string]: any;
  
  loggedInUserName: string;
  imgUrl : String;
  name : string;
  price : number;
  count : number;
  userProduct : CustomProductDetails;
  userProducts : CustomProductDetails[];

  totalPrice:number = 0;

   selectedItem: any = [];
  constructor(private modalService: NgbModal , private restapiService : RestapiService) {
    this.userProduct  = new CustomProductDetails();
                    this.userProducts = [];

    
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
     
    this.doLocationComp();
    if (localStorage.getItem("userProducts")) {
      this.selectedCartItem=JSON.parse(localStorage.getItem("userProducts"));
      console.log(this.selectedCartItem)
    }
    this.doItemsComp(); 
  }
   
  @ViewChild('modal') public modalRef: ElementRef;
  public model: NgbModalRef;
  limitValue: any = 3;
showFlag = false; 
  
  title = 'cafeorder';

  public modal = document.getElementById('myModal');

  // Get the button that opens the modal
  public btn = document.getElementById('myBtn');

  // Get the <span> element that closes the modal
  public span = document.getElementsByClassName('close')[0];

  // When the user clicks the button, open the modal
  public openModal() {
    this.model = this.modalService.open(this.modalRef);
    }

  public doLocationComp() {
  
    this.restapiService.doLocation()
    .subscribe(res => {
     this.Location = res;
     console.log(res);
    });
  }
  public doItemsComp() {
    const request = {
      username: '',
      password: ''
    };
    this.restapiService.doItems('items', request)
    .subscribe(res => {
     this.Items = res;
     console.log(res);
    });
  
    
}
 
private showItems() {
this.showFlag = !this.showFlag;
if (!this.showFlag) {
this.limitValue = 3;
} else {
this.limitValue = this.dataVariable.length;
}
} 
 

 increaseByOne(item: any): number{
    
    item.quantity = item.quantity + 1;
    return item.quantity;
  }
  decreaseByOne(item: any) : number{
    
    item.quantity = item.quantity - 1;
    return item.quantity;
}

 continueShopping(item : any):any
 {  

   
   this.userProduct.Price = item.Price;
   this.userProduct.ProductId = item.ProductId;
   this.userProduct.ProductName = item.ProductName;
   this.userProduct.quantity=item.quantity;
   //this.userProduct.Quantity = item.Price;

   console.log(this.userProducts);
 this.userProducts.push(item);
 this.count = this.userProducts.length;
 console.log("Length "+this.count);
 localStorage.setItem("userProducts", JSON.stringify(this.userProducts));
 return this.userProducts;
 }

 /* quantityOrdered(totalQuantity : number){
   console.log(totalQuantity);
 } */
 
 getTotal(){
  //this._changeDetectorRef.detectChanges();
  this.totalPrice =0;
  if(localStorage.getItem("userProducts")){
   
  this.selectedCartItem.forEach(element => {
  this.totalPrice=+this.totalPrice + +element.Price * element.quantity;
  });
  
  }
  return this.totalPrice;
} 
 
/*  selectedItemForOrder(data){
   console.log("================="+data);
   this.selectedItem = JSON.parse(data); 
  
 } */

  
  userdata = {
 "Location": localStorage.getItem("city"),
 "FaceImage": localStorage.getItem("faceImage"),
 "isRegistered" : localStorage.getItem("isUserRegistered"),
 "localTime": localStorage.getItem("localTime")
 }  
  
 

}
 export class CustomProductDetails{
   
Price: string;
ProductId: string;
ProductName: string;

   quantity: number;


 }

 
  

