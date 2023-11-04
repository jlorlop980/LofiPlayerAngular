import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MainService } from '../services/main.service';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { Favorite, Song, Playlist } from '../models/AllModels';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  showFavorite: boolean = false;
  showSearch: boolean = false;
  showPlaylist: boolean = false;
  showLogin: boolean = false;
  songs:Song[]=[];
  favorites:Favorite[]=[];
  playlists: Playlist[]=[];
  logged: boolean;

  constructor(
    private updated: MainService,
    private apiService: ApiService,
    private alertCtrl: AlertService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.logged=this.authService.isAuthenticated()
    this.getSongs();
    this.updated.getFavorites().subscribe(
      (data) => {
        this.getFavorites()
        this.getPlaylist()
      },
      (error) => {}
    );
  }

  getSongs() {
    this.alertCtrl.showLoading();
    this.apiService.getEntity('songs').subscribe(
      (data:any) => {
        this.alertCtrl.hideLoading()
        this.songs=data.song;
      },
      (error:any) => {
        this.alertCtrl.hideLoading();
        this.alertCtrl.showToast("Error al obtener las canciones")
      }
    );
  }

  getPlaylist(){
    if(!this.authService.isAuthenticated()){return;}
    this.alertCtrl.showLoading();
    this.apiService.getEntity('playlist').subscribe(
      (data:any) => {
        this.alertCtrl.hideLoading()
        this.playlists=data.playlist;
      },
      (error:any) => {
        this.alertCtrl.hideLoading();
        this.alertCtrl.showToast("Error al obtener las canciones")
      }
    );
  }
  getFavorites(){
    if(!this.authService.isAuthenticated()){return;}
    this.alertCtrl.showLoading();
    this.apiService.getEntity('favorites').subscribe(
      (data:any) => {
        this.alertCtrl.hideLoading()
        this.favorites=data.favorites;
      },
      (error:any) => {
        this.alertCtrl.hideLoading();
        this.alertCtrl.showToast("Error al obtener los favoritos")
      }
    );
  }
}
