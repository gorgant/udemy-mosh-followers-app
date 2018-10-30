
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class GithubFollowersService {
  private readonly _url = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(private http: HttpClient) {  }

  getFollowers() { 
    return this.http.get(this._url).pipe(
      map(response => response));
  }
}
