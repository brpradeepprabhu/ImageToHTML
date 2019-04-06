import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(environment.api + "login", data)
  }
  register(data){
    return this.http.post(environment.api + "register", data)
  }
}
