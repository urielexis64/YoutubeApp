import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { YoutubePlaylistResponse, Item } from '../models/youtube-models';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private baseURL = 'https://youtube.googleapis.com/youtube/v3';
  private apikey = 'AIzaSyCTZolFzsW6DSbelyqtaXVGTPx3PerhIUA';
  private playlistId = 'UUSjcTjKtE6zaEWqPisIWpPQ';
  private nextPageToken;

  constructor(private http: HttpClient) {}

  getVideos() {
    const url = `${this.baseURL}/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playlistId)
      .set('key', this.apikey);
    return this.http
      .get<YoutubePlaylistResponse>(url, { params })
      .pipe(
        map((response) => {
          this.nextPageToken = response.nextPageToken;
          return response.items;
        }),
        map((items) => items.map((video) => video.snippet))
      );
  }
}
