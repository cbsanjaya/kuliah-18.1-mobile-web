import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicService } from '../comic.service';
import { Chapter } from '../chapter';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  urlComic: string;
  urlChapter: string;
  chapter: Chapter;

  constructor(private comicService: ComicService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.urlComic = this.route.snapshot.paramMap.get('comic');
    this.urlChapter = this.route.snapshot.paramMap.get('chapter');
    
    this.chapter = new Chapter();
    this.getChapter();
  }

  getChapter(): void {
    this.comicService.getChapter(this.urlComic, this.urlChapter)
      .subscribe(chapter => this.chapter = chapter);
  }

}
