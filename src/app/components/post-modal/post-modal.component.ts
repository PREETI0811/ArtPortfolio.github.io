import { Component, OnInit ,Input} from '@angular/core';
import {Post} from "../../Post";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent implements OnInit {
  @Input() post!:Post;

  constructor() { }

  ngOnInit(): void {
  }
  isMediaImage():boolean
  {
    console.log(this.post.type)
if(this.post.type=="img")
return true;
return false;
  }
  isMediaVideo():boolean
  {
if(this.post.type=="vid")
return true;
return false;
  }
}
