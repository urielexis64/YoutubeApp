import { Pipe, PipeTransform } from '@angular/core';
import { Thumbnails } from '../models/youtube-models';

@Pipe({
  name: 'thumbnail',
})
export class ThumbnailPipe implements PipeTransform {
  transform(thumbnails: Thumbnails): string {
    return thumbnails.standard.url;
  }
}
