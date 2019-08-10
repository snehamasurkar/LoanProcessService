import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { CustomerdetailsComponent } from 'app/modules/admin/customerdetails/customerdetails.component';
import { CustomerDetails } from 'util/model/CustomerDetails.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  mocurl = "http://laptop-aoibd8pi:8087/setData";
  constructor(private http: HttpClient) { }
  setData(customerdetails: CustomerDetails): Observable<CustomerDetails> {
    console.log(customerdetails);

    //console.log("In service"+customerdetails.age)
    //console.log("-------------------------------------------"+customerdetails)
    return this.http.post<CustomerDetails>(this.mocurl, customerdetails);
  }
}
