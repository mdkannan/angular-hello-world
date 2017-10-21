import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

 about:string;
 isShow:boolean=false;
 posts:Post[];
  constructor(private data:DataService) { }

  ngOnInit() {
  this.about = 'dnb is a norway based bank.';
   this.data.getPosts().subscribe((posts) => {
 // console.log(posts);
   this.posts = posts;

  });
  }

 show(){
 this.isShow = !this.isShow;
 }
}
interface Post{
	id:number,
	title:string,
	body:string,
	userId:number
}