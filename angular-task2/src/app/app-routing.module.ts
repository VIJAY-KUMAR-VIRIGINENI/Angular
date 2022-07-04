import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActiveComponent } from './components/active/active.component';
import { DeleteComponent } from './components/delete/delete.component';
// import { DeleteComponent } from './components/delete/delete.component';
import { HomeComponent } from './components/home/home.component';
import { ManageComponent } from './components/manage/manage.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'active',component:ActiveComponent},
  {path:'deleted',component:DeleteComponent},
  {path:'manage',component:ManageComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
