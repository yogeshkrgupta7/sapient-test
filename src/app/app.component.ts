import { Component } from '@angular/core';
import { SpaceXData } from './app.model';
import { AppService } from './app.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'sapient-test';
  listOfData: SpaceXData[] = [];
  launchStatus:boolean = false;
  landStatus:boolean = false;
  landingYearValue = '';


  yearList=['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020']
  statusState=['true','false'];

  constructor(private appService:AppService){

  }
  ngOnInit(){
    this.appService.getData().subscribe(res =>{
      if(res){
        this.listOfData = res;
        console.log(this.listOfData);
      }
    })
  }
  fetchYear(event){
    if(event){
      this.landingYearValue = event;
      this.filterDataByYear(this.launchStatus,this.landStatus,this.landingYearValue);
    }
  }
  fetchLandingStatus(event){
    if(event){
      this.landStatus = event;
      this.filterDataByLandStatus(this.launchStatus,this.landStatus);
    }
  }
  fetchLaunchStatus(event){
    if(event){
      this.launchStatus = event;
      this.filterDataByLaunchStatus(this.launchStatus);
    }
  }
  filterDataByLaunchStatus(launchValue){
    this.appService.filterDataByLaunchStatus(launchValue).subscribe(res =>{
      if(res){
        this.listOfData = res;
        console.log(this.listOfData);
      }
    })
  }

  filterDataByLandStatus(launchValue,
    landValue){
    this.appService.filterDataByLandStatus(launchValue,
      landValue).subscribe(res =>{
      if(res){
        this.listOfData = res;
        console.log(this.listOfData);
      }
    })
  }

  filterDataByYear(launchValue,
    landValue,
    landingYearValue){
    this.appService.filterDataByYear(launchValue,
      landValue,
      landingYearValue).subscribe(res =>{
      if(res){
        this.listOfData = res;
        console.log(this.listOfData);
      }
    })
  }
}
