import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from './book/guestpage/guest.component';
import { AdminComponent } from './book/admin/admin.component';
import { LoginComponent } from './book/login/login.component';


const routes : Routes = [
{ path : 'guest', component: GuestComponent},
{ path : 'admin', component: AdminComponent},
{ path : 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routingComponent = [GuestComponent,AdminComponent]