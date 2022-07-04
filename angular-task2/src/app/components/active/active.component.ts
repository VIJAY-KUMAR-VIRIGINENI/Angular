import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  users!:User[];
  constructor(private dataService:DataService) { 
   
 }

 ngOnInit() {
  this.users=this.dataService.getUsers(); 
 }
 bclick(user:User){
    
    this.dataService.deleteUser(user.id);
   
 }

}
