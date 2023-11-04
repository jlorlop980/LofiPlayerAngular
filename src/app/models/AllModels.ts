export interface Playlist {
    id:       number;
    name:     string;
    id_users: number;
    songs:    Song[];
}

export interface Song {
    id:        number;
    name:      string;
    url:       string;
    id_artist: number;
    id_genre:  number;
    artist:    Artist;
    genre:     Genre;
}

export interface Artist {
    id:   number;
    name: string;
}

export interface Genre {
    id:   number;
    name: string;
}

export interface Favorite {
    id:        number;
    id_users:  number;
    id_song:  number;
    songs:      Song;
}