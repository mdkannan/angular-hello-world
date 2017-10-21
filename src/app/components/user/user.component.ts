import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 name:string ;
 age:number;
 email:string;
 address:Address;
 posts:Post[];
 isEdit:boolean = false;

  constructor(private dataService:DataService) {
  this.name = 'gg';
   }

   hobbies:string[];

  ngOnInit() {
  this.name = 'ganapathy';
  this.age = 30;
  this.email = "test@test.com";
  this.address = {
  street:'gangai amman koil',
  city:'chennai',
  state: 'tamilnadu'
  }
  this.hobbies =['chess','swimming','rading books'];

  this.dataService.getPosts().subscribe((posts) => {
 // console.log(posts);
   this.posts = posts;

  });
  }

toggleEdit(){
	this.isEdit = !this.isEdit;
}
  onClick(){
 this.name = 'kannan';
  }
  addhobby(hobby){
  this.hobbies.unshift(hobby);
return false;
  }
  delHobby(value){
  for(let i=0;i<this.hobbies.length;i++){
  if(this.hobbies[i] == value){
  this.hobbies.splice(i,1);
  }
  }
  }

}

interface Address{
	street:string,
 	city:string,
 	state:string
}

interface Post{
	id:number,
	title:string,
	body:string,
	userId:number
}
