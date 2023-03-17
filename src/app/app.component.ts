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
}
