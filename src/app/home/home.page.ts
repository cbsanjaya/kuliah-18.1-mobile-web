import { Component, OnInit } from '@angular/core';
import { Comic } from '../comic';
import { ComicService } from '../comic.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage  implements OnInit {
  comic: Comic;

  constructor(private comicService: ComicService) { }

  ngOnInit() {
    this.comic = new Comic();
    this.getComic();
  }

  getComic(): void {
    this.comicService.getComic('one_piece')
      .subscribe(comic => this.comic = comic);
  }
}
