import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import {GuestBook} from './guestbook';
import { Observable } from 'rxjs';

@Injectable()
export class GuestBookService {

    private baseUrl = 'http://localhost:8080/api/guests';
 
    constructor(private http: HttpClient) { }

    uploadImage(formData){
      return this.http.post(`${this.baseUrl}` + `/upload`, formData);
    }
   
    saveGuestData(guestbook){
      console.log('guestbook'+guestbook);
      return this.http.post(`${this.baseUrl}` + `/register`, guestbook);
  }

  getGuestList(){
    return this.http.get(`${this.baseUrl}`);
}

rejectEntry(userId){
  return this.http.delete(`${this.baseUrl}` + `/reject`, userId);
}

}