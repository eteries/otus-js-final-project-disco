export class Song {
    constructor(
        public id: string,
        public added: string,
        public title: string,
        public artistId: string,
        public albumId: string,
        public youtube: string
    ) {}
}