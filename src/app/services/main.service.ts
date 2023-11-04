import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private $searchPlaylist = new BehaviorSubject(0)
  private $searchFavorites = new BehaviorSubject(0)

  constructor() { }

  getFavorites(){
    return this.$searchFavorites.asObservable()
  }

  getPlaylist(){
    return this.$searchFavorites.asObservable()
  }

  updateFavorites(){
    this.$searchFavorites.next(this.$searchFavorites.value+1);
  }
  updatePlaylist(){
    this.$searchPlaylist.next(this.$searchPlaylist.value+1);
  }
}
