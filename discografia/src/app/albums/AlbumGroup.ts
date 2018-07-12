import { Album } from './Album'

export class AlbumGroup {
    constructor(
        public artistId: string,
        public artistAlbums: Album[]
    ) {}
}