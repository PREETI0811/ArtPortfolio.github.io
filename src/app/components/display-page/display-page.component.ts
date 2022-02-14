import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit {
  isdisplayHome:boolean=true;
  isDisplayGallery:boolean=false;
  isDisplayAbout:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  
  changeDisplayPage(event:string)
  {   
    console.log(event);

    if(event=="home")
    {this.isdisplayHome=true;
      this.isDisplayGallery=false;
      this.isDisplayAbout=false;}
    else if(event=="gallery")
    {this.isdisplayHome=false;
      this.isDisplayGallery=true;
      this.isDisplayAbout=false;}
    else if(event=="about")
    {this.isdisplayHome=false;
      this.isDisplayGallery=false;
      this.isDisplayAbout=true;}
      console.log(this.isdisplayHome,this.isDisplayGallery,this.isDisplayAbout);

  }
  
}
