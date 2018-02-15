import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  firstName: string;
  lastName: string;
  phone: string;

  constructor(private contactService: ContactService) {}

  addContact(id: any) {
    const newContact = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone
    };
    console.log(newContact);
    this.contactService.addContact(newContact).subscribe(contact => {
      this.contacts.push(contact);
      this.contactService.getContacts().subscribe(contacts => {
        this.contacts = contacts;
      });
    });
  }
  deleteContact(id: any) {
    const contacts = this.contacts;
    this.contactService.deleteContact(id).subscribe(data => {
      if (data.n === 1) {
        for (let i = 0; i < contacts.length; i++) {
          if (contacts[i]._id === id) {
            contacts.splice(i, 1);
          }
        }
      }
    });
  }
  editContact(id: any) {
    // Enter something here
  }
  ngOnInit() {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }
}
