import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from 'src/app/models/Playlist';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent  implements OnInit {
  @Input() playlists:Playlist[];
  @Input() logged:boolean;
  constructor(
    private mainService:MainService
  ) { }

  ngOnInit() {}

  createPlaylist(){
    //TODO lo que vaya aqui
    this.mainService.updateFavorites();
  }

  deletePlaylist(){
    //TODO delete a playlist
    this.mainService.updateFavorites();
  }
}
