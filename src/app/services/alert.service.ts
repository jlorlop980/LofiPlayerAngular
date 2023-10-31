import { Injectable } from '@angular/core';
import { ToastController, AlertController, NavController, LoadingController, Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public loading: HTMLIonLoadingElement;

  constructor(
    private toastController: ToastController,
    private alertCtrl: AlertController,
    public navCtrl:NavController,
    private loadingCtrl: LoadingController,
    private platform: Platform
  ) {}
  
  async presentToast(message: any, color: any) {
    const toast = await this.toastController.create({
      message: message,
      cssClass: 'toast-info',
      duration: 3000,
      position: 'top',
      color: color
    });
    toast.present();
  }

  async presentAlert(title:string, msg:string) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: 'Ok'
        }
      ]
    })
    alert.present();
  }

  async presentAlertButton(title:string, msg:string,textButton:string,action=null) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: msg,
      buttons: [
        {
          text: textButton,
          handler: () => {
            if (action != null){
              this.navCtrl.navigateRoot('/' + action);
            }
          }
        }
      ]
    })
    alert.present();
  }

  public async showLoading(message?: string, duration?: number){
    this.loading = await this.loadingCtrl.create({
      duration: duration,
    })
    return this.loading.present();
  }

  public hideLoading(){
    this.loading.dismiss().then(() => {
      return true;
    })
  }
  
  public async showToast(message: string){
    const toast = await this.toastController.create({
      message: message,
      duration: 5000,
      mode: 'md',
      buttons:['OK'],
      position: 'top'
    });
    toast.present();
  }
  
  public getPlatform(){
    return this.platform.is('ios') ? 'ios' : 'android';
  }
}
