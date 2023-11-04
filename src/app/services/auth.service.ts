import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public navCtrl: NavController,
    public router: Router
  ) { }
  
  //TODO Cambiar esto
  public login(token: any,rol: any) {
    let tokenKey = localStorage.setItem("TOKEN_KEY", token);
    this.router.navigateByUrl('home');
    return tokenKey;
  }

  /**
   * Recuperar contraseña
   * @param email 
   * @returns 
   */
  public recover(email: String) {
  }

  /**
   * Eliminar token y establecer variable de sesión a 'logout'
   */
  public logout(){
    localStorage.removeItem("TOKEN_KEY");
    this.navCtrl.navigateRoot('home');
  }

  /**
   * Valor de la variable de sesión
   */
  public isAuthenticated():boolean{    
    return localStorage.getItem("TOKEN_KEY")?true:false;
  }
}
