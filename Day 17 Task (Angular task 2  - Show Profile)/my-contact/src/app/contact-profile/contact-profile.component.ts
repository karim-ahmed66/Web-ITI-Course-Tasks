import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsServiceService } from '../contacts-service.service';

@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.css']
})
export class ContactProfileComponent implements OnInit {


  SelectedContact : any;
  contactId:number;
  constructor(_ContactsServiceService:ContactsServiceService, _ActivatedRoute:ActivatedRoute)
  {
    this.contactId = Number(_ActivatedRoute.snapshot.paramMap.get('id'))
    _ContactsServiceService.getcontactById(this.contactId).subscribe(Response => this.SelectedContact = Response);
  }

  ngOnInit(): void {
  }

}
