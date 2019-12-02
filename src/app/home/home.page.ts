import { Component } from '@angular/core';
import { BoundEventAst } from '@angular/compiler';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title:string="i-TIJARA";
  
  public Categories = {categorie1:'Les produits Les Mieux Vendus',
                      categorie2:'Chapelets',
                      categorie3:'Bonnets',
                      categorie4:'Habillements et Accessoires',
                      categorie5:'Chaussures',
                    };

    slideOpts = {
      effect: 'coverflow',
      grabCursor: true,
      slidesPerView: 2.2,
      loop:true,
      coverflowEffect: {
      rotate: 50, 
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
      freeMode: true,
      },
  };

  produits: Array<any>=[

    {url: "../../assets/images/bonnetnaafo.jpeg", name: 'Bonnet naafo', price: '4000fcfa'},

    {url: "../../assets/images/voile.jpeg", name: 'Meulfe Femme', price: '4000fcfa'},

    {url: "../../assets/images/youssour.jpeg", name: 'Chapelet Youssour', price: '70000fcfa'},
  
    {url: "../../assets/images/Bonnetmulticolore.jpg", name: 'Bonnet muliticolore', price: '5000fcfa'},

    {url: "../../assets/images/boubouhomme.jpeg", name: 'Pret à porter homme', price: '20000fcfa'}
    
  ];
  constructor() {}

  onSearch(){
    console.log("recherche");
  }

}
