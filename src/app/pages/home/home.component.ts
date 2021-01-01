import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/youtube-models';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videos: Video[] = [];

  constructor(private ytService: YoutubeService) {}

  ngOnInit(): void {
    this.ytService.getVideos().subscribe((response) => {
      console.log(response);
      this.videos.push(...response);
    });
  }
}
