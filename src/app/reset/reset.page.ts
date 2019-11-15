import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  tel: number;

  constructor() { }

  ngOnInit() {
  }
  
  onReset(){
    console.log('Téléphone :' +this.tel);
  }


}
