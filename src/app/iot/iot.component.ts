import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { FiltersService } from '../filters.service'
import { throwError } from 'rxjs';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {
  numbers: number[] = [];
  datavariable: any = [];
  datavariableOrginal: any = [];
  filterTemp: any;


  filterdata =
    {
      "filterID": "",
      "filterName": "",
      "fromDate": "2011-08-01",
      "toDate": "2018-10-31",
      "sortBy": null,

      "selectedFleets": "",
      "selectedSubfleets": "",
      "selectedTails": "",
      "selectedATAs": "",
      "selectedCPNs": "",
      "selectedMFGs": "",
      "filterBy":
      {
        "newUnit": "",
        "removedUnit": "",
        "installedUnit": ""
      }

    }

  fModel: any = []
  sModel: any = []
  aModel: any = []
  tModel: any = []
  fModels: any = []
  fModelsOriginal: any = [];

  ansFleet: any = []
  ans : string
  ans1: string
  ans2: string
  ans3: string
  fleet1: any = [];
  fleet2: string;
  subFleet1: any = []
  subFleet2: string
  Tail1: any = []
  Tail2: string
  ATA1: any = []
  ATA2: string
  selectedData: any = [];
  selectedSubFleet: any = []
  selectedATA: any = []
  selectedTail: any = []
  test : any
  reselectedData: string
  reselectedSubFleet: string

  public selectFleet(data) {
    this.selectedData = data;
    this.ans = "FleetModel" + this.selectedData.fleetNo;
    this.filterdata.selectedFleets = this.ans;
    console.log("flet " + this.ans)
    this.fleet1.push(this.ans);
    console.log(this.fleet1);
   }
   public reselectFleet(data){
    this.reselectedData=data
   }

  public assignFleet() {
    this.ansFleet.push(this.selectedData);
    console.log(this.selectedData)
    this.fModel.push("FleetModel" + this.selectedData.fleetNo);
  }
  public reassignfleet(){
    this.fModels.push(this.reselectedData);
    console.log(this.reselectedData)
    var index=this.fModel.indexOf(this.reselectedData)

    this.fModel.splice(index,1);
  }

  public reassignFleet() { 
    this.fModels.push(this.selectedData);
    var index=this.fModel.indexOf(this.selectedData)

    this.fModel.splice(index,1);
   }

  public selectSubFleet(data) {
    this.selectedSubFleet = data;
    this.ans1 = "Sub-Fleet Number" + this.selectedSubFleet.subfleetNo;
    console.log("subfleet" + this.ans1)
    this.filterdata.selectedSubfleets = this.ans1
    this.subFleet1.push(this.ans1);
  }
  public reselectSubFleet(data){
    this.reselectedSubFleet=data
   }

  public assignSubFleet() {
    // this.sModel.push(this.selectedSubFleet);
    this.sModel.push("Sub-Fleet Number" + this.selectedSubFleet.subfleetNo);
  }

  public reassignSubfleet(){
    this.fModels.push(this.reselectedSubFleet);
    console.log(this.reselectedSubFleet)
    var index=this.sModel.indexOf(this.reselectedSubFleet)

    this.sModel.splice(index,1);
  }
  public selectATA(data) {
    this.selectedATA = data
    this.ans2 = "ATA Number" + this.selectedATA.ataSystemNo;
    this.filterdata.selectedATAs = this.ans2
    this.ATA1.push(this.ans2);
  }

  public assignATA() {
    // this.aModel.push(this.selectedATA)
    this.aModel.push("ATA Number" + this.selectedATA.ataSystemNo);
  }
reselectedTail: String; 
  public selectTail(data) {
    
    this.selectedTail = data
    this.ans3 = "Tail Number" + this.selectedTail.tailNo;
    this.filterdata.selectedTails = this.ans3
    this.Tail1.push(this.ans3);
  }

  public assignTail() {
    // this.tModel.push(this.selectedTail)
    this.tModel.push("Tail Number" + this.selectedTail.tailNo);
    
  }

  public reselectTail(data) {
    
    this.reselectedTail = data
  }
  public reassignTail() { 
    this.fModels.push(this.reselectedTail);
    console.log(this.reselectedTail)
    var index=this.tModel.indexOf(this.reselectedTail)

    this.tModel.splice(index,1);
   }

  constructor(private modalService: NgbModal, private route: Router, private filter: FiltersService) {

  }


  @ViewChild('modal') public modalRef: ElementRef;
  @ViewChild('modal1') public modalRef1: ElementRef;
  @ViewChild('modal2') public modalRef2: ElementRef;
  @ViewChild('modal3') public modalRef3: ElementRef;
  @ViewChild('modal4') public modalRef4: ElementRef;
  public model: NgbModalRef;

  title = 'childdirectr';

  public modal = document.getElementById('myModal');

  // Get the button that opens the modal
  public btn = document.getElementById('myBtn');

  // Get the <span> element that closes the modal
  public span = document.getElementsByClassName('close')[0];

  // When the user clicks the button, open the modal
  public openModal() {
    this.model = this.modalService.open(this.modalRef);
  }


  public openModal1() {
    this.model = this.modalService.open(this.modalRef1);
  }

  public openModal2(dat: any) {
    this.filterTemp = dat;
    this.fModel = this.filterTemp.selectedFleets.split(",")
    this.sModel = this.filterTemp.selectedSubfleets.split(",")
    this.tModel = this.filterTemp.selectedTails.split(",")
    this.aModel = this.filterTemp.selectedATAs.split(",")
    this.model = this.modalService.open(this.modalRef2);
  }

  public openModal3() {
    this.model = this.modalService.open(this.modalRef3);
  }

  public openModal4(dat: any) {
    this.filterTemp = dat;

    this.fModel = this.filterTemp.selectedFleets.split(",");
     this.sModel = this.filterTemp.selectedSubfleets.split(",")
    this.tModel = this.filterTemp.selectedTails.split(",")
    this.aModel = this.filterTemp.selectedATAs.split(",")

    console.log(this.ansFleet)
    this.new = this.filterTemp.filterBy.newUnit
    this.installed = this.filterTemp.filterBy.installedUnit
    this.removed = this.filterTemp.filterBy.removed
    this.checkboxdata()


    this.model = this.modalService.open(this.modalRef4);
  }

  ngOnInit() {
    this.doFilter();
    this.getModel();
  }

  saveFilter(): void {

    for (let i = 0; i < this.fleet1.length; i++) {
      if (i == 0) {
        this.fleet2 = this.fleet1[i]
      } else {
        this.fleet2 = this.fleet2 + this.fleet1[i]
      }
      if (i != (this.fleet1.length - 1)) {
        this.fleet2 = this.fleet2 + ",";
      }
    }

    for (let i = 0; i < this.subFleet1.length; i++) {
      if (i == 0) {
        this.subFleet2 = this.subFleet1[i]
      } else {
        this.subFleet2 = this.subFleet2 + this.subFleet1[i]
      }
      if (i != (this.subFleet1.length - 1)) {
        this.subFleet2 = this.subFleet2 + ",";
      }
    }

    for (let i = 0; i < this.ATA1.length; i++) {
      if (i == 0) {
        this.ATA2 = this.ATA1[i]
      } else {
        this.ATA2 = this.ATA2 + this.ATA1[i]
      }
      if (i != (this.ATA1.length - 1)) {
        this.ATA2 = this.ATA2 + ",";
      }
    }

    for (let i = 0; i < this.Tail1.length; i++) {
      if (i == 0) {
        this.Tail2 = this.Tail1[i]
      } else {
        this.Tail2 = this.Tail2 + this.Tail1[i]
      }
      if (i != (this.Tail1.length - 1)) {
        this.Tail2 = this.Tail2 + ",";
      }
    }
    this.filterdata.selectedFleets = this.fleet2
    this.filterdata.selectedSubfleets = this.subFleet2
    this.filterdata.selectedATAs = this.ATA2
    this.filterdata.selectedTails = this.Tail2

    console.log("fleet2 " + this.fleet2);
    this.filter.SaveFilter(this.filterdata).subscribe((res) => {
      console.log(this.filterdata);
      localStorage.setItem("FName", this.filterdata.filterName);
      localStorage.setItem("StartDate", this.filterdata.fromDate);
    })

  }

  updateFilter(): void {
    //  this.filterTemp.selectedFleets="fleetNo6";
    for (let i = 0; i < this.fModel.length; i++) {
      if (i == 0) {
        this.fleet2 = this.fModel[i]
      } else {
        this.fleet2 = this.fleet2 + this.fModel[i]
      }
      if (i != (this.fModel.length - 1)) {
        this.fleet2 = this.fleet2 + ",";
      }
    }

    this.filterTemp.selectedFleets = this.fleet2;

    this.filter.UpdateFilter(this.filterTemp).subscribe((res) => {
      console.log(this.filterTemp);
      

      console.log(this.filterTemp.selectedFleets)
    })
  }


  getModel(): void {
    this.filter.getModels().subscribe((res) => {
      this.fModelsOriginal = res;
      console.log(this.fModels);




    })

  }

  filterBy: any = [];
  new: boolean = false
  installed: boolean = false
  removed: boolean = false

  statusChangeNew(statusChange: string) {
    this.new = !this.new
    this.checkboxdata()
  }
  statusChangeInstalled(statusChange: string) {
    this.installed = !this.installed
    this.checkboxdata()
  }
  statusChangeRemoved(statusChange: string) {
    this.removed = !this.removed;
    this.checkboxdata()
  }

  checkboxdata() {

    console.log(this.new + "  -  " + this.installed + "  -- " + this.removed)
    this.fModels = [];

    var j = 0;
    for (let i in this.fModelsOriginal) {

      // console.log(this.fModelsOriginal[i].status)
      if (this.new && this.fModelsOriginal[i].status === "Scheduled") {
        this.fModels[j] = this.fModelsOriginal[i];
        j++;
      }
      if (this.installed && this.fModelsOriginal[i].status === "Installed Unit") {
        this.fModels[j] = this.fModelsOriginal[i];
        j++;
      }

      if (this.removed && this.fModelsOriginal[i].status === "Inactive") {
        this.fModels[j] = this.fModelsOriginal[i];
        j++;
      }
    }
  }

  statusChangeNew1(statusChange: string) {
    this.new = !this.new
    this.filterheader()
  }
  statusChangeInstalled1(statusChange: string) {
    this.installed = !this.installed
    this.filterheader()
  }
  statusChangeRemoved1(statusChange: string) {
    this.removed = !this.removed;
    this.filterheader()
  }


  filterheader() {

    console.log(this.new + "  -  " + this.installed + "  -- " + this.removed)
    this.datavariable = [];

    var j = 0;
    for (let i in this.datavariableOrginal) {
      if (this.new && this.datavariableOrginal[i].filterBy.newUnit && !this.datavariableOrginal[i].filterBy.installedUnit) {
        this.datavariable[j] = this.datavariableOrginal[i];
        j++;
      }
      if (this.installed && this.datavariableOrginal[i].filterBy.installedUnit) {
        this.datavariable[j] = this.datavariableOrginal[i];
        j++;
      }

      if (this.removed && this.datavariableOrginal[i].filterBy.removedUnit) {
        this.datavariable[j] = this.datavariableOrginal[i];
        j++;
      }

      if (!this.new && !this.installed && !this.removed) {
        this.datavariable[j] = this.datavariableOrginal[i];
        j++;
      }

    }
    console.log("test" + this.datavariable)

  }

  public doFilter() {
    this.filter.getfiltersdata().subscribe(res => {
      this.datavariable = res;
      this.datavariableOrginal = res;
      // console.log(res);

      console.log(this.datavariable);
      // console.log(JSON.parse(this.filterBy));
    })
  }
}