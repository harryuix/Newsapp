import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
api_key = 'e00495ebaf2847a29e1161ede5bfc84b';

  constructor(private http:HttpClient) { }
  initSources(){
     return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }
  initArticles(){
   //return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
   return this.http.get('https://newsapi.org/v2/everything?q=estonia&pagesize=100&page=1&apiKey='+this.api_key);
  }
  getArticlesByID(source: String){
   //return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
   return this.http.get('https://newsapi.org/v2/everything?q=estonia&apiKey='+this.api_key);
  }
}