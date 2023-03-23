export interface AlbumsSearchResponse {
  userId: number;
  id: number;
  title: string;
}

export interface PhotosSearchResponse {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
