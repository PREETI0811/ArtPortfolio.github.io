import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  
  hideOverlay(event)
  {
    console.log(event);
    event.target.parentElement.parentElement.parentElement.style.display="none";
  }
}
