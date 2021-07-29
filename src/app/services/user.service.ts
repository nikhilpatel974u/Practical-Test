import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signUpUser(data): Observable<any> {
    return this.http.post('https://www.anasource.com/team4/dummy_api/api/signup', data);
  }

  loginUser(data): Observable<any> {
    return this.http.post('https://www.anasource.com/team4/dummy_api/api/login', data);
  }

  getBlog() {
    return this.http.get('https://www.anasource.com/team4/dummy_api/api/blog');
  }

  save(data) {
    return this.http.post('https://www.anasource.com/team4/dummy_api/api/create_blog', data)
  }


}
