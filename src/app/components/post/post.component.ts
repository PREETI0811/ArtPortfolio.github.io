import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Post} from "../../Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],

})
 
export class PostComponent implements OnInit {
@Input() post!:Post;

@Output() isShowPostModalChanged = new EventEmitter<Post>();

@Output() postClick=new EventEmitter();

isShowPostModal=false;
  constructor() { }

  ngOnInit(): void {
  }
  onClick()
  {
     this.isShowPostModal=!this.isShowPostModal;
     
     this.isShowPostModalChanged.emit(this.post);
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
