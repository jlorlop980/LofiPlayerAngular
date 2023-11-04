import { Artist } from './Artist';
import { Genre } from './Genre';

export interface Song {
    id:        number;
    name:      string;
    url:       string;
    id_artist: number;
    id_genre:  number;
    artist:    Artist;
    genre:     Genre;
}