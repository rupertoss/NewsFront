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
  private articles: Article[];
  public visibleArticles: Article[];
  public page;
  public totalPages;
  
  constructor(private http: HttpClient) { }
  
  public getArticlesByCountryAndCategory(category?: string) {
    this.category = category;
    this.http.get(`${this.API_URL}/${this.country}/${this.category}`)
      .map(data => data['articles'])
      .map(articles => {
         return articles.map(article => this.articleFactory(article))})
       .subscribe(articles => {
          this.articles = articles,
          this.totalPages = Math.ceil(articles.length / 4)
          this.getArticlesByPage(1)} );
    this.page = 1;
  }
  
  public getArticlesByQuery(query: string) {
    this.http.get(`${this.API_URL}/${query}`)
      .map(data => data['articles'])
      .map(articles => {
        return articles.map(article => this.articleFactory(article))})
      .subscribe(articles => {
          this.articles = articles,
          this.totalPages = Math.ceil(articles.length / 4)
          this.getArticlesByPage(1)} );
    this.page = 1;
  }
  
  public getArticlesByPage(page: number) {
    this.visibleArticles = this.articles.slice(page * 4 - 4, page * 4);
    this.page = page;
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
