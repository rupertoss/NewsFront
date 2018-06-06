import { ArticleService } from '../shared/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  private query: string = "";
  
  private categories = ["business", "entertainment", "general", "health", "science", "sport", "technology"];
  private selectedCategory;
  
  constructor(private articleService: ArticleService ) {
  }

  getArticlesByQuery() {
    this.articleService.getArticlesByQuery(this.query);
  }
  
  getArticlesByCategory(category: string) {
    this.articleService.getArticlesByCountryAndCategory(category);
    this.selectedCategory = category;
  }

  ngOnInit() {
    this.articleService.getArticlesByCountryAndCategory('technology');
    this.selectedCategory = "technology";
  }

}
