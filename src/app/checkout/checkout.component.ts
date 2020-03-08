import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { forEach } from '@angular/router/src/utils/collection';
import { RestapiService } from '../services/restapi/restapi.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'] 

})
export class CheckoutComponent implements OnInit {

  [x: string]: any;
  selectedCartItem: any = [];
  loggedInUserName: string;
  imgUrl : String;
  
  
  constructor(private modalService: NgbModal,  private restapiService : RestapiService) {
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
  public model: NgbModalRef;
  
  title = 'cafeorder';

  ngOnInit() {
    console.log("in nit")
    if (localStorage.getItem("userProducts")) {
      this.selectedCartItem=JSON.parse(localStorage.getItem("userProducts"));
      console.log(this.selectedCartItem)
    }
    this.doLocationComp();
  }

  
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


  increaseByOne(item: any): number{
    
     item.quantity = item.quantity + 1;
     return item.quantity;
   }
   decreaseByOne(item: any) : number{
     
     item.quantity = item.quantity - 1;
     return item.quantity;
}
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
  }
  
 /*  submit() {
    this.route.navigateByUrl('checkout');
    }  */
  // off(){
  // this.route.navigateByUrl("menulist");
  // } 



/* export class parentItemDetails{

  @Input('selectedItem') item: any;
  @Input('master') master: string;
} */
