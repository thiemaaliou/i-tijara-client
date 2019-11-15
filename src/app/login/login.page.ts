import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

tel:number;
password:string;
  constructor() { }

  ngOnInit() {
  }
  onLogin(){
    console.log('Téléphone: ' +this.tel,
                'Password: ' +this.password);
  }

}
