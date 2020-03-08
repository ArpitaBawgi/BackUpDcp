import { Component, OnInit , AfterViewInit, Input} from '@angular/core';
import { RestapiService } from '../services/restapi/restapi.service';
import {  ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../services/restapi/order.service';
import { forEach } from '@angular/router/src/utils/collection';
declare var jQuery: any;
import {
   	NgbModal,
   	ModalDismissReasons,
   	NgbModalRef,
   	NgbModule
   	} from '@ng-bootstrap/ng-bootstrap';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-fr-dashboard',
  templateUrl: './fr-dashboard.component.html',
  styleUrls: ['./fr-dashboard.component.css'],
  providers:[OrderService],

})
export class FrDashboardComponent implements OnInit {

  Location : any
  name : string;
  price : number;
  count : number;
  userProduct : CustomProductDetails;
  userProducts : CustomProductDetails[];

  totalPrice:number = 0;

   selectedCartItem: any = [];

  @Input('init')
  selectedItemCount: number;
  showFlag: boolean;
  limitValue: number =3;
  Items: Response;
  TempVariable: Object;
  loggedInUserName: string;
  imgUrl : String;
  constructor(private modalService: NgbModal, private route: Router, private restapiService: RestapiService) { 
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

  @ViewChild('modal') public modalRef: ElementRef;
  public dataVariable;
  public model: NgbModalRef;
  title = 'childdirectr';

  public modal = document.getElementById('myModal');

  // Get the button that opens the modal
  public btn = document.getElementById('myBtn');

  // Get the <span> element that closes the modal
  public span = document.getElementsByClassName('close')[0];

  // When the user clicks the button, open the modal
  public openModal(items : any){
  
  console.log(this.userProducts);
  console.log(this.userProduct);
  this.name = items.ProductName;
  this.price = items.Price;

  this.model = this.modalService.open(this.modalRef);

 
  }



  ngOnInit() {
    this.doItemsComp();
    this.doLocationComp();
    this.doLocationComp1();
    this.doLocationComp2();
    if (localStorage.getItem("userProducts")) {
      this.selectedCartItem=JSON.parse(localStorage.getItem("userProducts"));
      console.log(this.selectedCartItem)
    }
     
  this.showItems();
    
  }
  private showItems() {
    this.showFlag = !this.showFlag;
    if (!this.showFlag) {
    this.limitValue = 3;
    } else {
    this.limitValue = this.dataVariable.length;
    }
    } 

    public expandModal() {
      this.model = this.modalService.open(this.modalRef);
      }

  public doItemsComp() {
    const request = {
      username: '',
      password: ''
    };
    this.restapiService.doItems('items', request)
    .subscribe(res => {
     this.Items = res;
    console.log(this.Items)
    });
  }

  public doLocationComp() {
  
    this.restapiService.doLocation()
    .subscribe(res => {
     this.Location = res;
     localStorage.setItem("city",this.Location.city);
     localStorage.setItem("time",this.Location.time_zone.current_time);
     console.log(res);
    });
  }

  public doLocationComp1() {
   
    this.restapiService.doLocation1('location')
    .subscribe(res => {
     this.dataVariable = res;
     localStorage.setItem("key",this.dataVariable[0].Key)
     console.log(localStorage.getItem("key"))
    });
  }

    public doLocationComp2() {
      
      this.restapiService.doLocation2('temperature1','temperature2')
      .subscribe(res => {
       this.TempVariable = res;
       console.log(res);
       console.log(this.TempVariable[0].Temperature.Metric.Value);
      });
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
     
    this.userProducts.forEach(element => {
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
    "FaceImage": localStorage.getItem("imgUrl"),
    "isRegistered" : localStorage.getItem("isUserRegistered"),
    "localTime": localStorage.getItem("time")
    }   
   
}



  export class CustomProductDetails{
    
Price: string;
ProductId: string;
ProductName: string;

    quantity: number;


  }
 /*  export class SelectedItemDetails{
    selectedItem: any = []; 
   master = 'Master';
  } */