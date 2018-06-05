import { Article } from './article';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private API_URL: string = 'http://localhost:8080/api/news';
  public queryCategory: string = 'technology';
  public articles: Article[];
  
  constructor(private http: HttpClient) { }
  
  public fetchArticles(queryCategory: string) {
    this.queryCategory = queryCategory;
    this.articles = [];
    this.http.get(`${this.API_URL}?category=${this.queryCategory}`)
      .map(data => data['articles'])
      .map(articles => {
         return articles.map(article => this.articleFactory(article))
      })
      .subscribe((articles) => this.articles = articles)
  }
  
  private articleFactory(article: any): Article {
    return new Article(
      article.author,
      article.title,
      article.description,
      article.date,
      article.sourceName,
      article.articleUrl,
      article.imageUrl)
  }
}
