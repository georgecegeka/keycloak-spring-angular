import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedingService {

  constructor(private httpClient: HttpClient) { }
  getFeedingResult(feedingType: string) {
    return this.httpClient.get('http://127.0.0.1:8080/' + feedingType);
  }
}
