import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { FavoritesComponent } from './favorites/favorites.component';


@NgModule({
    imports: [ CommonModule ],
    declarations: [ 
      SearchComponent,
      LoginComponent,
      PlaylistComponent,
      FavoritesComponent
    ],
    exports: [ 
      SearchComponent,
      LoginComponent,
      PlaylistComponent,
      FavoritesComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {

}