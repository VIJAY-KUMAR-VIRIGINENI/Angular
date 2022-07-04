import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  // x:number;
  // y:number;

  public products = [{
    name:"Moto G5",
    quantity:2
 },
 {
    name:"Racold Geyser",
    quantity:3 
 }];

  constructor() {

  }
  
  addproduct(name: string,quantity:number) {

    var details = {name:name,quantity:quantity};
    this.products.push(details);

}
  

 addNumbers(a:number,b:number) {
  return a+b;;
}
add(a:string,b:string){
return a.concat(b);
}

}
