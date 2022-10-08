import { Component, OnInit } from '@angular/core';
import { ContactsServiceService } from "../contacts-service.service";
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contactsArr = [];
  constructor(_ContactsServiceService:ContactsServiceService)
  {
    _ContactsServiceService.getAllContacts().subscribe(Response => this.contactsArr=Response);
  }

  ngOnInit(): void {
  }

}
