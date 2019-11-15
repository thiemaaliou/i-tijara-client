import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  userName:string;
  tel:number;
  address:string;
  password:string;
  confirmpassword:string;

  constructor() { }

  ngOnInit() {
  }
  onSignUp(){
    console.log('UserName: '+this.userName, 
                'Téléphone: ' +this.tel, 
                'Addresse: ' +this.address,
                'Password: ' +this.password, 
                'Confirm Password: ' +this.confirmpassword);
 

  }


}
