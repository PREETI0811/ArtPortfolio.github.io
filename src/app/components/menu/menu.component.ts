import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faBars=faBars;
  menuOption:string="home";
  @Output() menuOptionChanged = new EventEmitter<string>();
  displayMenuList:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  showMenu()
  {
    this.displayMenuList=true;
  }
  menuOptionSelected(event)
  {
this.menuOption=event.target.id;
this.menuOptionChanged.emit(this.menuOption);

  }
  
}
