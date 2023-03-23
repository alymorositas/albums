import { AlbumService } from './../album.service';
import { PhotosSearchResponse } from './../models/albums';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
})
export class AlbumDetailsComponent {
  album: PhotosSearchResponse[] = [];

  id?: number;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getPhotosById(this.id).subscribe((res) => {
      this.album = res;
    });
  }
}
