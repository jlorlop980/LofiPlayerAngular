import { Song } from './Song';

export interface Playlist {
    id:       number;
    name:     string;
    id_users: number;
    songs:    Song[];
}
