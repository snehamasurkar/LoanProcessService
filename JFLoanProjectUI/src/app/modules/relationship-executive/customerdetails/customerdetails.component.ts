import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from 'util/model/CustomerDetails.model';
import { ServiceService } from 'app/shared/service.service';
import { data } from 'jquery';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.scss']
})
export class CustomerdetailsComponent implements OnInit {
  customerdetails: CustomerDetails = {
    cust_Id: null,
    first_name: "",
    last_name: "",
    dob: "",
    email_id: "",
    mobile_number: "",
    gender: "",
    address: "",
    age: "",
    leadnumber: null,
    profession: "",
    recidential_type: "",
    marital_status: "",
  }
  constructor(private ser: ServiceService) { }

  ngOnInit() {

  }
  getalldata() {

  }
  customerSave(customerdetails) {
    
    console.log("method call--------------------------------" + customerdetails.last_name)
    this.ser.setData(customerdetails).subscribe((data: CustomerDetails) => { });
    
  }
}
