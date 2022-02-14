import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBars=faBars;
  isDisplayModal:boolean=false;
  isDisplayOverlay:boolean=true;

  @Output() isDisplayModalChanged = new EventEmitter<boolean>();
  @Output() isDisplayOverlayChanged = new EventEmitter<boolean>();
  @Output() displayPageChanged = new EventEmitter<string>();

  constructor() { }
  
  ngOnInit(): void {
  }
  displayMenu()
  {
     this.isDisplayModal=!this.isDisplayModal;
     
   this.isDisplayModalChanged.emit(this.isDisplayModal);
  }
  displayOverlay(){
    console.log("displayOverlay",this.isDisplayOverlay)
    this.isDisplayOverlay=!this.isDisplayOverlay;

    this.isDisplayOverlayChanged.emit(this.isDisplayOverlay);
  }
  hideOverlay()
  {
    this.isDisplayOverlay=!this.isDisplayOverlay;

    this.isDisplayOverlayChanged.emit(this.isDisplayOverlay);
  }
  changeMenuOption(event:string){
   this.displayPageChanged.emit(event);
  }
}
