import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DefaulterdetailsComponent } from './defaulterdetails/defaulterdetails.component';
import { EnquirydetailsComponent } from './enquirydetails/enquirydetails.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomerdetailsComponent } from '../relationship-executive/customerdetails/customerdetails.component';

const adminrouting:Routes=[{path:'admindashboard',component:AdmindashboardComponent},
{path:'customerdetails',component:CustomerdetailsComponent},
{path:'defaulterdetails',component:DefaulterdetailsComponent},
{path:'enquirydetails',component:EnquirydetailsComponent},
{path:'loandetails',component:LoandetailsComponent},]

@NgModule({
  declarations: [AdmindashboardComponent, , DefaulterdetailsComponent, EnquirydetailsComponent, LoandetailsComponent],
  exports:[AdmindashboardComponent, CustomerdetailsComponent, DefaulterdetailsComponent, EnquirydetailsComponent, LoandetailsComponent],
  imports: [
    RouterModule.forChild(adminrouting),
    CommonModule
  ]
})
export class AdminModule { }
