import { Component, Input, OnInit } from '@angular/core';
import { Favorite } from 'src/app/models/AllModels';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  @Input() favorites: Favorite[];
  @Input() logged: boolean;

  constructor(
    private apiService: ApiService,
    private mainService: MainService,
    private alerCtrl: AlertService
  ) {}

  ngOnInit() {}

  removeFavorite(id: number) {
    this.alerCtrl.showLoading();
    this.apiService.deleteEntity('favorite', id).subscribe(
      (data:any) => {
        this.alerCtrl.hideLoading();
        this.mainService.updateFavorites();
      },
      (error:any) => {
        this.alerCtrl.hideLoading();
        this.alerCtrl.showToast("Error al eliminar el favorito")
      }
    );
  }

  playFavorite(){
    //TODO implementar logica de play
  }
}
