import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelationshipExecutivedashboardComponent } from './relationship-executivedashboard/relationship-executivedashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



const rerouting:Routes=
[{path:'relationshipexecutivedashboard',component:RelationshipExecutivedashboardComponent},
{path:'customerdetails',component:CustomerdetailsComponent},]



@NgModule({
  declarations: [RelationshipExecutivedashboardComponent, CustomerdetailsComponent],
  exports: [RelationshipExecutivedashboardComponent,CustomerdetailsComponent],
  imports: [
    RouterModule.forChild(rerouting),
    CommonModule,FormsModule,HttpClientModule
   
  ]
})
export class RelationshipExecutiveModule { }
