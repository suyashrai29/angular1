import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  clicks(){
    return "now:" + new Date();
  }
  getPerson(){
    return this.http.get('assets/booklist.json');
  }


}
