import { Article } from './article';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private API_URL: string = 'http://localhost:8080/news';
  public country: string = 'pl';
  public category: string = 'technology';
  
  constructor(private http: HttpClient) { }
  
  public getArticlesByCountryAndCategory(category?: string): Observable<Article[]> {
    this.category = category;
    return this.http.get(`${this.API_URL}/${this.country}/${this.category}`)
      .map(data => data['articles'])
      .map(articles => {
         return articles.map(article => this.articleFactory(article))
      })
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
