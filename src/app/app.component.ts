import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cafe-menu';
}

/* 
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UtilityService } from './utility.service';
import { WebCamComponent } from 'ack-angular-webcam';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private utilityService: UtilityService,
    private modalService: NgbModal
  ) {}
  @ViewChild('modal') public modalRef: ElementRef;
  public model: NgbModalRef;
  public email;
  public response = null;
  public loader = false;
  public webcam: WebCamComponent;
  public webcamImag;
  public matchedImag;
  public timeInMss;
  public camPlaceHolder = true;
  public resultPlaceHolder = true;
  public uploadedImg = '';
  public camOptions = {
	  width: 186,
	  height: 170
  }
  public ngOnInit() {}
  public onCamError(ev) {
    console.log(ev);
  }
  public onCamSuccess(ev) {
    console.log(ev);
  }
  public loadImage() {
    // Load web cam image
    this.webcam
      .getBase64()
      .then(base => {
        this.webcamImag = base;
        this.makeAPI();
      })
      .catch(e => console.error(e));
  }
  
  
  public makeAPI() {
	  
    this.loader = true;
    this.response = null;
    const request = {
      FaceImage: this.webcamImag
    };
    const url =
      'https://k2rp4an93m.execute-api.us-east-1.amazonaws.com/dev/celeb';
    this.utilityService.PostCall(url, request).subscribe(
      resultArray => {
        this.loader = false;
		this.matchedImag = resultArray.celebImageLink;
		// console.log(this.resultPlaceHolder);
		this.resultPlaceHolder = false;
        resultArray.probWithUser = resultArray.probWithUser;
        this.response = resultArray;
		
		setTimeout(() => {
			this.openModal();
		}, 2000);
		
    
		
      },
      error => {
		  this.model.close();
        this.loader = false;
        console.log(error);
		
      }
    );
  }
  public openModal() {
    this.email = '';
    this.model = this.modalService.open(this.modalRef);
  }
  public emailSubmit() {
    const pattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
    if (!String(this.email).match(pattern) && this.email !== '') {
      alert('Email is invalid');
    } else {
      this.loader = true;
      const request = {
        celebName: this.response.celebName,
        userMail: this.email,
        probWithUser: this.response.probWithUser,
        clebWikiLink: this.response.clebWikiLink,
		timeInMss: this.response.timeInMss,
		celebImageLink:this.response.celebImageLink,
        celebSnippet: this.response.celebSnippet
      };
      const url =
        'https://k2rp4an93m.execute-api.us-east-1.amazonaws.com/dev/sendmail ';
      this.utilityService.PostCall(url, request).subscribe(
        resultArray => {
          this.loader = false;
          this.model.close();
        },
        error => {
			this.model.close();
          this.loader = false;
		  
        }
      );
	 
    }
  }
  public clearImage() {
    this.response = null;
	this.camPlaceHolder = true;
	this.matchedImag = '../assets/images/download.jpg';
	 this.model.close();
  }
  
  onUploadChange(evt: any) {
const file = evt.target.files[0];

if (file) {
const reader = new FileReader();

reader.onload = this.handleReaderLoaded.bind(this);
reader.readAsBinaryString(file);
}
}

handleReaderLoaded(e) {
const img = 'data:image/png;base64,' + btoa(e.target.result);
console.log(img)
this.camPlaceHolder = false;
this.uploadedImg = img;
this.webcamImag = img;

this.makeAPI();
} 
}
 */