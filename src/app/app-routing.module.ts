import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {path: 'list', component: UserListComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'add', component: AddUserComponent},
  {path: 'edit/:id', component: EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
