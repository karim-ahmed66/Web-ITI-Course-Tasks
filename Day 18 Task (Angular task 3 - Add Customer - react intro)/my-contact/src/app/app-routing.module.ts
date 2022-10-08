import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'All-Contacts', component:ContactsListComponent},
  {path:'', redirectTo:'/All-Contacts',pathMatch:'full'},
  {path:'profile/:id', component:ContactProfileComponent},
  {path:'Add-Customers', component:AddCustomerComponent},

  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
