import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
mytext:string='hey shubham.'
enteredtext:string=''

oninput(value:string){
  this.enteredtext=value
  console.log(this.enteredtext)
}

compare(a1:string,a2:string){
  if(!a2) return 'pending'
  return a2===a1 ? "correct":"incorrect"
}
}
