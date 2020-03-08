import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef,
  NgbModule
  } from '@ng-bootstrap/ng-bootstrap';

import { RestapiService } from '../services/restapi/restapi.service';


import {HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-griddles',
  templateUrl: './griddles.component.html',
  styleUrls: ['./griddles.component.css']
})
export class GriddlesComponent implements OnInit {

  constructor(private modalService: NgbModal, private route: Router, private restapiService: RestapiService) { }
  dataVariable: any;

  @ViewChild('modal') public modalRef: ElementRef;
 @ViewChild('modal1') public modalRef1: ElementRef;
  public model: NgbModalRef;
  title = 'childdirectr';

  public modal = document.getElementById('myModal');

  // Get the button that opens the modal
  public btn = document.getElementById('myBtn');

  // Get the <span> element that closes the modal
  public span = document.getElementsByClassName('close')[0];


  ngOnInit() {
    this.doItemsComp();
  }

  // When the user clicks the button, open the modal
  public openModal(type) {
    if (type === 'modal') {
      this.model = this.modalService.open(this.modalRef);
    } else {
      this.model = this.modalService.open(this.modalRef1);
    }

  }
  public doItemsComp() {
    const request = {
      username: '',
      password: ''
    };
    this.restapiService.doItems('items', request)
    .subscribe(res => {
     this.dataVariable = res;
     console.log(res);
    });
  }


}
