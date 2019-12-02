import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {

  title: string ="Bienvenu chez i-Tijara";
  description: string ="Nous sommes le Groupe i-Tijara et nous sommes là pour vous offrir les meilleurs produits. Détendez-vous et faites vos achats tranquillement.";

  constructor() { }

  ngOnInit() {
  }

}
