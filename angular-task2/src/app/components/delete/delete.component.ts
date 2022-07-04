import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  users!:User[];
  constructor(private dataService:DataService) { 
   
 }

 ngOnInit() {
  this.users=this.dataService.getUsers(); 
 }
 bclick(user:User){   
    this.dataService.addUser(user.id)  
 }

}
