import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project';
  num=0
  myclass=""
chanespan(){
  this.num++
  if(this.num>=10){
this.myclass="color"
  }
  else if(this.num<=10){
    this.myclass="colorr" 
  }
}
chanespann(){
  this.num--
  if(this.num>=10){
    this.myclass="color"
      }
      else if(this.num<=10){
        this.myclass="colorr" 
      }
}
allStudents = [
  {
  name : "Mahmoud" ,
  address : "Cairo Egypt",
  date : "12/1/1995",
  phone : "01234567890",
  photo :"https://png.pngtree.com/element_our/20200610/ourmid/pngtree-default-avatar-image_2237213.jpg"
  },
  {
  name : "ahmed" ,
  address : "alex Egypt",
  date : "8/1/1990",
  phone : "01234567890",
  photo :"https://png.pngtree.com/element_our/20200610/ourmid/pngtree-default-avatar-image_2237213.jpg"
  },
  {
  name : "ali" ,
  address : "Cairo Egypt",
  date : "2/2/2000",
  phone : "0123098765430",
  photo :"https://png.pngtree.com/element_our/20200610/ourmid/pngtree-default-avatar-image_2237213.jpg"
  },
  {
  name : "Osam" ,
  address : "monefia Egypt",
  date : "20/6/2006",
  phone : "01234567890",
  photo :"https://png.pngtree.com/element_our/20200610/ourmid/pngtree-default-avatar-image_2237213.jpg"
  }

];
}
