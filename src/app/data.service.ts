import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }

  Getdata()
  {
    return this.http.get("http://192.168.43.64:2000/employees");
  }
  diksha(no)
  {
    return this.http.delete("http://192.168.43.64:2000/employees/"+no);
  }
}
