import { Article } from '../shared/article';
import { ArticleService } from '../shared/article.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input()
  private articles: Article[];
  
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.fetchArticles();
  }

}
