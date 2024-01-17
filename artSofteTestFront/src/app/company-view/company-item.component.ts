import {Component, ContentChild, Input} from '@angular/core';
import {CompanyItem} from "../../Interfaces/CompanyItem";

@Component({
  selector: 'app-company-view',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent {

  @Input("company") company?: CompanyItem;
}
