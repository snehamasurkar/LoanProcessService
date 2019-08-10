import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalHeaddashboardComponent } from './legal-headdashboard/legal-headdashboard.component';
import { Routes, RouterModule } from '@angular/router';

const legalheadrouting:Routes=[{path:'legalheaddashboard',component:LegalHeaddashboardComponent},]

@NgModule({
  declarations: [LegalHeaddashboardComponent],
  exports:[LegalHeaddashboardComponent ],
  imports: [
    RouterModule.forChild(legalheadrouting),
    CommonModule
  ]
})
export class LegalHeadModule { }
