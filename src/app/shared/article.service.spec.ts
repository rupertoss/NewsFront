import {TestBed, async, inject, tick, fakeAsync, getTestBed} from '@angular/core/testing';
import {HttpModule, BaseRequestOptions, Http, ResponseOptions, Response} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {Article} from "./article";
import { ArticleService } from './article.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';

//describe('ArticleService', () => {
//  
//  let service: ArticleService;
//  let backend: MockBackend;
//  
//  beforeEach(() => {
//    TestBed.configureTestingModule({
//      imports: [HttpClientModule],
//      providers: [
//        ArticleService,
//        MockBackend,
//        BaseRequestOptions,
//        {
//          provide: HttpClient,
//          useFactory: (backend, options) => new HttpClient(backend, options),
//          deps: [MockBackend, BaseRequestOptions]
//        }]
//    });
//    
//    backend = TestBed.get(MockBackend);
//    
//    service = TestBed.get(ArticleService);
//  });
//
//  it('should return articles when searching by country and category', fakeAsync(() => {
//    let response = {
//          "articles": [
//              {
//                  "author": "Alicja ¯ebruñ",
//                  "title": "Sony Cyber-shot RX100 VI – miniaturowy kompakt z du¿ym zoomem",
//                  "description": "Sony pokaza³o now¹ generacjê ma³ego kompaktu z serii RX100 z jasnym obiektywem. Szósta ods³ona aparatu mo¿e siê pochwaliæ du¿o wiêkszym zoomem.",
//                  "articleUrl": "http://www.komputerswiat.pl/nowosci/foto/2018/23/sony-cyber-shot-rx100-vi-miniaturowy-kompakt-z-duzym-zoomem.aspx",
//                  "imageUrl": "http://www.komputerswiat.pl/media/2018/156/6383866/mt_rx100vi_left.jpg",
//                  "date": "2018-06-06",
//                  "sourceName": "Komputerswiat.pl"
//              },
//              {
//                  "author": "https://www.facebook.com/htaler",
//                  "title": "Histeria wokó³ kupna GitHub przez Microsoft jest niewiarygodnie idiotyczna",
//                  "description": "To tak ekstremalnie g³upie, ¿e a¿ brak mi s³ów.",
//                  "articleUrl": "https://www.spidersweb.pl/2018/06/github-microsoft.html",
//                  "imageUrl": "https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2018/06/pexels-photo.jpg",
//                  "date": "2018-06-04",
//                  "sourceName": "Spidersweb.pl"
//              }
//          ],
//          "country": "pl",
//          "category": "technology"
//      };
//    
//    backend.connections.subscribe(connection => {
//      connection.mockRespond(new Response(<ResponseOptions>{
//        body: JSON.stringify(response)
//      }));
//    });
//    
//    let articles: Article[];
//    service.getArticlesByCountryAndCategory("technology").subscribe(articles => { this.articles = articles; });
//    tick();
//    
//    expect(articles.length).not.toBe(0);
//    }
//  ));
//  
//  
//  
//});

//describe('ArticleService', () => {
//
//  let service: ArticleService;
//  let backend: MockBackend;
//  let articles: Article[];
//
//  beforeEach(() => {
//
//
//    TestBed.configureTestingModule({
//      imports: [HttpClientTestingModule],
//      providers: [
//        ArticleService,
//        MockBackend,
//        BaseRequestOptions,
//        {
//          provide: HttpClient,
//          useFactory: (backend, options) => new HttpClient(backend, options),
//          deps: [MockBackend, BaseRequestOptions]
//        }
//      ]
//    });
//
//    // Get the MockBackend
//    backend = TestBed.get(MockBackend);
//
//    // Returns a service with the MockBackend so we can test with dummy responses
//    service = TestBed.get(ArticleService);
//    
//    articles = [];
//
//  });
//
//  fit('should return articles when searched', fakeAsync((inject([HttpTestingController, ArticleService],
//    (httpClient: HttpTestingController, service: ApiService) => {
//    let response = {
//          "articles": [
//              {
//                  "author": "Alicja ¯ebruñ",
//                  "title": "Sony Cyber-shot RX100 VI – miniaturowy kompakt z du¿ym zoomem",
//                  "description": "Sony pokaza³o now¹ generacjê ma³ego kompaktu z serii RX100 z jasnym obiektywem. Szósta ods³ona aparatu mo¿e siê pochwaliæ du¿o wiêkszym zoomem.",
//                  "articleUrl": "http://www.komputerswiat.pl/nowosci/foto/2018/23/sony-cyber-shot-rx100-vi-miniaturowy-kompakt-z-duzym-zoomem.aspx",
//                  "imageUrl": "http://www.komputerswiat.pl/media/2018/156/6383866/mt_rx100vi_left.jpg",
//                  "date": "2018-06-06",
//                  "sourceName": "Komputerswiat.pl"
//              },
//              {
//                  "author": "https://www.facebook.com/htaler",
//                  "title": "Histeria wokó³ kupna GitHub przez Microsoft jest niewiarygodnie idiotyczna",
//                  "description": "To tak ekstremalnie g³upie, ¿e a¿ brak mi s³ów.",
//                  "articleUrl": "https://www.spidersweb.pl/2018/06/github-microsoft.html",
//                  "imageUrl": "https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2018/06/pexels-photo.jpg",
//                  "date": "2018-06-04",
//                  "sourceName": "Spidersweb.pl"
//              }
//          ],
//          "country": "pl",
//          "category": "technology"
//      };
//
//      // When the request subscribes for results on a connection, return a fake response
//      backend.connections.subscribe(connection => {
//        connection.mockRespond(new Response(<ResponseOptions>{
//          body: JSON.stringify(response)
//        }));
//      });
//
//      // Perform a request and make sure we get the response we expect
//      service.getArticlesByCountryAndCategory("technology").map(articles => this.articles = articles);
//      tick();
//
////      expect(service.books.length).toBe(2);
////      expect(service.books[0].id).toBe("js2P_8lbR2wC");
////      expect(service.books[0].title).toBe("Fundamentals of Biomechanics");
////      expect(service.books[0].subTitle).toBeUndefined();
////      expect(service.books[0].authors.length).toBe(1);
////      expect(service.books[0].authors[0]).toBe("Duane V. Knudson");
////      expect(service.books[0].publisher).toBe("Springer Science & Business Media");
////      expect(service.books[0].publishDate).toBe("2003-01-01");
////      expect(service.books[0].description).toBe("Fundamentals of Biomechanics introduces the exciting world of how human movement is created and how it can be improved. Teachers, coaches and physical therapists all use biomechanics to help people improve movement and decrease the risk of injury. The book presents a comprehensive review of the major concepts of biomechanics and summarizes them in nine principles of biomechanics. Fundamentals of Biomechanics concludes by showing how these principles can be used by movement professionals to improve human movement. Specific case studies are presented in physical education, coaching, strength and conditioning, and sports medicine.");
////      expect(service.books[0].categories.length).toBe(1);
////      expect(service.books[0].categories[0]).toBe("Science");
////      expect(service.books[0].thumbnail).toBe("http://books.google.com/books/content?id=js2P_8lbR2wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api");
////      expect(service.books[0].smallThumbnail).toBe("http://books.google.com/books/content?id=js2P_8lbR2wC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api");
//        expect(this.articles.length).toBeGreaterThan(0);
//    }
//  ))));


describe('ArticleService', () => {
  let injector;
  let service: ArticleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArticleService]
    });

    injector = getTestBed();
    service = injector.get(ArticleService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#getArticles', () => {
    it('should return an Observable<Article[]>', () => {
      const dummyArticles: Article[] = [
              {
                  "author": "Alicja ¯ebruñ",
                  "title": "Sony Cyber-shot RX100 VI – miniaturowy kompakt z du¿ym zoomem",
                  "description": "Sony pokaza³o now¹ generacjê ma³ego kompaktu z serii RX100 z jasnym obiektywem. Szósta ods³ona aparatu mo¿e siê pochwaliæ du¿o wiêkszym zoomem.",
                  "articleUrl": "http://www.komputerswiat.pl/nowosci/foto/2018/23/sony-cyber-shot-rx100-vi-miniaturowy-kompakt-z-duzym-zoomem.aspx",
                  "imageUrl": "http://www.komputerswiat.pl/media/2018/156/6383866/mt_rx100vi_left.jpg",
                  "date": "2018-06-06",
                  "sourceName": "Komputerswiat.pl"
              },
              {
                  "author": "https://www.facebook.com/htaler",
                  "title": "Histeria wokó³ kupna GitHub przez Microsoft jest niewiarygodnie idiotyczna",
                  "description": "To tak ekstremalnie g³upie, ¿e a¿ brak mi s³ów.",
                  "articleUrl": "https://www.spidersweb.pl/2018/06/github-microsoft.html",
                  "imageUrl": "https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2018/06/pexels-photo.jpg",
                  "date": "2018-06-04",
                  "sourceName": "Spidersweb.pl"
              }
      ];

      service.getArticlesByCountryAndCategory("technology").subscribe(articles => {
        expect(articles.length).toBe(2);
        expect(articles).toEqual(dummyArticles);
      });
//
//      const req = httpMock.expectOne(`${service.API_URL}/users`);
//      expect(req.request.method).toBe('GET');
//      req.flush(dummyArticles);
    });
  });

});

