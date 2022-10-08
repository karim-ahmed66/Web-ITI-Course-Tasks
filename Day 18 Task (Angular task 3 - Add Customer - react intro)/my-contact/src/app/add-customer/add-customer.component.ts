import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsServiceService } from '../contacts-service.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  isSubmitted:Boolean = false
  registerForm = new FormGroup({
    name: new FormControl("",Validators.required),
    email: new FormControl("",[Validators.email,Validators.required]),
    city: new FormControl("",Validators.required),
    phone: new FormControl("",Validators.maxLength(11))
  });


  constructor(public _ContactsServiceService:ContactsServiceService) { }
  save(){
    this._ContactsServiceService.AddCustomers(this.registerForm.value).subscribe(Response=>{
    this.isSubmitted=true
    this.registerForm.reset();
    console.log(this.registerForm.value);
    })
  }
  ngOnInit(): void {
  }

}
