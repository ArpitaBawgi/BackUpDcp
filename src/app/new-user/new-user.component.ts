import { Component, OnInit } from '@angular/core';
import {ForUserService} from '../services/restapi/for-user.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { WebCamModule } from 'ack-angular-webcam';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
// registerPanel :boolean = true;
// defaultPanel:boolean = true;
export class NewUserComponent implements OnInit {
  response: any;
  public started = false;
  public location :string;


  locationShw:boolean = false;
  registerPanel :boolean = true;
  defaultPanel:boolean = true;
  childPanel:boolean = false;

  loginPanel:boolean = false;
  
  //optionForLogin :boolean = false; 
  eatInTakeWaypanel:boolean = false;
  userLocationPanel:boolean = true; 
  userLocation:boolean = false; 
  startOrderPanel :boolean = false;
  error:boolean = false;
  chkUser:boolean = false;
  

  userdata={
    "FaceImage" : '',
"Name": '',
"Gender": "Female",
"lastname" : "",
"Email": "",
"ContactNo": "",
"isVeg":false,
"FoodAllergy": [ ],
"twiID":'' 
  }


  facialAnalysis = {
    "FaceImage": '',
    "FaceId": ''
  }
  
  userlogindata = {
  "FaceImage" : ''
  }
  constructor(private login: ForUserService, private router: Router  ) { }


 

 onLogin(){
  this.login.userRegistration(this.userdata)
.subscribe(res => {
console.log(res);
}) 
} 
onScan(){
  // this.login.userAnalyzeface(this.userdata)
  this.login.userLogin(this.userdata)
 
.subscribe(res => {
console.log(res);
console.log("success");
}) 
} 



/** Webcam */


  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
 

  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  public ngOnInit(): void { 

    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  public triggerSnapshot(): void {
  this.trigger.next();  
  console.log("snapshot trigger");
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
    console.log("success1");
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
    console.log("success2");
  }

  public showNextWebcam(directionOrDeviceId: boolean|string): void { 
    this.nextWebcam.next(directionOrDeviceId);
    console.log("success3");
  }
 
 
  public handleImage(webcamImage: WebcamImage): void {  
    console.log("success4");
      this.webcamImage = webcamImage;     
      this.userlogindata.FaceImage = webcamImage.imageAsDataUrl;    
      localStorage.setItem("loggedInUserImg",webcamImage.imageAsDataUrl); 
      this.userLogin();
      console.log("success5");
  }
  userLogin(){
    this.login.userLogin(this.userlogindata).subscribe((res) => {  
      console.log("res",res); 
      if(res.statusCode != 200){
        // this.registerPanel = true;
        // this.defaultPanel = false;
        this.childPanel = true;    
        this.router.navigateByUrl('/create-account');

      }
      else{ 
        localStorage.setItem("Name", res.body.Name);
        localStorage.setItem("loyaltyPoints",res.body.loyaltyPoints); 
        localStorage.setItem("loggedInUserData",JSON.stringify(res.body));
        localStorage.setItem("faceId",res.body.FaceId);
        localStorage.setItem("isUserRegistered","true");
        localStorage.setItem("loggedInUserGender",res.body.AnalyzeFace.Gender);
        this.optOut(); 
      } 
  }); 
}
 
optOut():void{
  localStorage.setItem("selectedModule","home");  
  localStorage.setItem("selectedModuleTitle","Recommendation To Order");  
  localStorage.setItem("username",this.userdata.Name);  
  this.router.navigateByUrl('/dashboard');
 // window.location.reload();
}


  public cameraWasSwitched(deviceId: string): void {
    console.log("success8");
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    console.log("success trigger");
    return this.trigger.asObservable();
    console.log("success triger2");
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    console.log("success next");
    return this.nextWebcam.asObservable();
    console.log("success next3");
  }

 

  checkUserName(){
    if(this.userdata.Name != "" || this.userdata.Name != null){
      return "false";
    }
    else{
      return "true";
    }
  }
}
