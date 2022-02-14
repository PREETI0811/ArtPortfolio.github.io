import { Component, OnInit } from '@angular/core';
import {Post} from "../../Post"
import {POSTS} from "../../post-list";
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
    posts:Post[]=POSTS;
    postsRow1:Post[]=this.posts.slice(0,3);
    postsRow2:Post[]=this.posts.slice(3,6);
    hideTable:boolean=false;
    modalPost!:Post;
  constructor() { 
  }

  
  ngOnInit(): void {
  }
  hidePostTable(event:Post){
    console.log(event);
    this.modalPost=event;
    this.hideTable=!this.hideTable;
  }
  showPostTable(){
    this.hideTable=!this.hideTable;
  }
}
