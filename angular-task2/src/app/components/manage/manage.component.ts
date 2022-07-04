import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  users!:User[];
  enabledId?:string;
  
  constructor(private dataService:DataService) { 
   
 }

 ngOnInit() {
  this.users=this.dataService.getUsers(); 
 }

 bclick(user:User){   
  this.enabledId=user.id;
   
 }
}
