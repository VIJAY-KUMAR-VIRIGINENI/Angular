import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users!: User[];

  constructor() {
    console.log('in con');
    this.users = [
      {
        id: 'User1',
        firstName: 'One',
        lastName: 'User',
        age: 23,
        login: 'User1',
        password: 'vijay',
        isDeleted: true
      },
      {
        id: 'User2',
        firstName: 'Two',
        lastName: 'User',
        age: 23,
        login: 'User1John',
        password: 'John',
        isDeleted: false
      },
      {
        id: 'User3',
        firstName: 'Three',
        lastName: 'User',
        age: 23,
        login: 'UserAlex',
        password: 'Alex',
        isDeleted: true
      },
      {
        id: 'User4',
        firstName: 'Four',
        lastName: 'User',
        age: 25,
        login: 'UserRobert',
        password: 'Robert',
        isDeleted: false
      },
      {
        id: 'User5',
        firstName: 'Five',
        lastName: 'User',
        age: 23,
        login: 'User5',
        password: 'vijay',
        isDeleted: true
      },
      {
        id: 'User6',
        firstName: 'Six',
        lastName: 'User',
        age: 23,
        login: 'User6John',
        password: 'John',
        isDeleted: false
      },
      {
        id: 'User7',
        firstName: 'Seven',
        lastName: 'User',
        age: 23,
        login: 'User7',
        password: 'Alex',
        isDeleted: true
      },
      {
        id: 'User8',
        firstName: 'Eight',
        lastName: 'User',
        age: 25,
        login: 'User8',
        password: 'Robert',
        isDeleted: false
      },



    ];
  }
  getUsers(): User[] {
    return this.users;
  }
  deleteUser(id:string): void {
    // this.users.find(obj=>obj.id==cUser.id).isDeleted=true,
    const objIndex = this.users.findIndex((obj => obj.id == id));
    this.users[objIndex].isDeleted = true;
console.log(id,'deleted in service',this.users);
  }
  addUser(id:string):void {
    const objIndex = this.users.findIndex((obj => obj.id == id));
    this.users[objIndex].isDeleted = false;
  }

}
