import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              './app2.component.css']
})
export class AppComponent {
  title = 'dipsaday1';
  message=0;
  isDisabled=true;
  message2=0;

  blink(){
    console.log("Hello World !");
    this.message= this.message+1;
    this.isDisabled=false;
  }

  slashYou(){
    console.log("Slash !");
    this.message2=this.message+2;
  }


}
