import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactsServiceService {

  getAllContactsLink="https://jsonplaceholder.typicode.com/users";


  constructor( private http:HttpClient)
  {

  }


  getAllContacts():Observable<any>
  {
    return this.http.get(this.getAllContactsLink);
  }

  getcontactById(id:number):Observable<any>
  {
    return this.http.get(this.getAllContactsLink+"/"+id);
  }
  AddCustomers(customer:any):Observable<any>
  {
    return this.http.post(this.getAllContactsLink,customer)
  }
}
