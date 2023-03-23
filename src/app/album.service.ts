import { AlbumsSearchResponse, PhotosSearchResponse } from './models/albums';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private request: HttpClient) {}

  getAllAlbums() {
    return this.request.get<AlbumsSearchResponse[]>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }

  getPhotosById(id: number) {
    return this.request.get<PhotosSearchResponse[]>(
      'https://jsonplaceholder.typicode.com/photos?albumId=' + id
    );
  }
}
