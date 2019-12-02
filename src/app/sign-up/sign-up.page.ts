import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  userName: string;
  tel: number;
  address: string;
  password: string;
  confirmpassword: string;

  constructor(public alertController:AlertController) { }

  ngOnInit() {
  }
  async onSignUp() {
    const alert = await this.alertController.create({
      header: 'Confirmation!',
      message: 'Etes-vous sûr de vouloir vraiment continuer?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          handler: (blah) => {
          }
        }, {
          text: 'Oui',
          handler: () => {
            console.log('Compte créé avec succcés');
          }
        }
      ]
    });

    await alert.present();
  }
}
