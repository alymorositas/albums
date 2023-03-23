import { AlbumsSearchResponse } from './../models/albums';
import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css'],
})
export class AlbumsListComponent implements OnInit {
  constructor(private albumService: AlbumService) {}

  albums: AlbumsSearchResponse[] = []

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe((res) => {
      this.albums = res;
    });
  }
}