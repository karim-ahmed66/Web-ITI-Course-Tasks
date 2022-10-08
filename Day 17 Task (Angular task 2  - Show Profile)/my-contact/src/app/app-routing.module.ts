import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

const routes: Routes = [
  {path:'', component:ContactsListComponent},
  {path:'profile/:id', component:ContactProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
