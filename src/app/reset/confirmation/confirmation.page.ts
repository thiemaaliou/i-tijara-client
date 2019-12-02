import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  newpassword: string;
  confirmpassword : string;

  constructor(public alertController:AlertController) { }

  ngOnInit() {
  }

  async onFinish() {
    const alert = await this.alertController.create({
      message: 'Votre mot de passe a été réinitisaliser avec succés',
      buttons: ['OK']
    });

    await alert.present();
  }
}
