import { Song } from './Song';

export interface Favorite {
    id:        number;
    id_users:  number;
    id_song:  number;
    songs:      Song;
}