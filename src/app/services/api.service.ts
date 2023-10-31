import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class ApiService {
  public httpOptions: any;

  constructor(
    public http: HttpClient
  ) {}

  public login(email: any, password: any): any{
    return this.http.post(environment.apiUrl + 'login', { email: email, password: password});
  }

  public register(form:any): any{
    return this.http.post(environment.apiUrl + 'register', form);
  }

  public registerAut(form:any): any{
    return this.http.post(environment.apiUrl + 'registerAut', form);
  }

  public forgotPassword(email: any): any{
    return this.http.post(environment.apiUrl + 'recover', email);
  }

  public getEntity(entity: string, id?: any): any{
    if(id == null){
      return this.http.get(environment.apiUrl + entity);
    } else {
      return this.http.get(environment.apiUrl + entity + '/' + id);
    }
  }

  public getEntitySession(entity: string, id?: any): any{
    this.setToken(this.getToken());
    if(id == null){
      return this.http.get(environment.apiUrl + entity, this.httpOptions);
    } else {
      return this.http.get(environment.apiUrl + entity + '/' + id, this.httpOptions);
    }
  }

  public addEntity(entity: string, parametres?: any): any{
    this.setToken(this.getToken());
    return this.http.post(environment.apiUrl + entity, parametres, this.httpOptions);
  }

  public updateEntity(entity: string, id: number, parametres: any): any{
    this.setToken(this.getToken());
    return this.http.put(environment.apiUrl + entity + '/' + id, parametres, this.httpOptions);
  }

  public deleteAcc():any {
    return this.http.delete(environment.apiUrl+"delete-user",this.httpOptions);
  }

  public deleteEntity(entity: string, id?: number): any{
    if(id == null){
      return this.http.delete(environment.apiUrl + entity, this.httpOptions);
    } else {
      return this.http.delete(environment.apiUrl + entity + '/' + id, this.httpOptions);
    }
  }

  public changeStatus(stat:number){
    this.setToken(this.getToken());
    return this.http.post(environment.apiUrl+"userActive",{active:stat},this.httpOptions)
  }

  //Asignar token a cabecera HTTP
  public setToken(token: any){
    this.httpOptions = { 
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }

  //Eliminar token
  public removeToken(){
    this.httpOptions = { 
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
      })
    };
  }

  public getToken(){
    return localStorage.getItem("TOKEN_KEY");
  }
}
