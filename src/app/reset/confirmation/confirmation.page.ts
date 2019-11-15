import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  newpassword: string;
  confirmpassword : string;

  constructor() { }

  ngOnInit() {
  }

  onFinish(){
    console.log(this.newpassword, this.confirmpassword)
  }
  
}
