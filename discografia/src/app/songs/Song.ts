export class Song {
  constructor(
    public id: string,
    public added: string,
    public title: string,
    public artistId: string,
    public albumId: string,
    public track: number | null,
    public youtube: string
  ) {
  }
}
