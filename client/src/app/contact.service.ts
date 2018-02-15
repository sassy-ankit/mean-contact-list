import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from './contact.model';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {
  constructor(private http: Http) {}

  // retriving contacts
  getContacts() {
    return this.http
      .get('http://localhost:3000/api/contact')
      .map(res => res.json());
  }
  // add conacts
  addContact(newContact) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http
      .post('http://localhost:3000/api/contact', newContact, {
        headers: headers
      })
      .map(res => res.json());
  }
  // delete contacts
  deleteContact(id) {
    return this.http
      .delete('http://localhost:3000/api/contact/' + id)
      .map(res => res.json());
  }
}
