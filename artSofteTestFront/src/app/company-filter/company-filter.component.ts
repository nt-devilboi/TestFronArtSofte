import {Component, DoCheck} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CompanyStore} from "../../Services/company-store.service";

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.css']
})
export class CompanyFilterComponent implements DoCheck {
  public FilterForm: FormGroup = new FormGroup({
    TypeFilter: new FormControl<string>(''),
    NameFilter: new FormControl<string>(''),
    IndustryFilter: new FormControl<string>('')
  })

  constructor(private _companyStore: CompanyStore) {

  }

  public TypeFiltering() {
    this._companyStore.Filter((x) => {
      return x.type.toLowerCase().includes((this.FilterForm.get('TypeFilter')?.value).toLowerCase()) &&
        x.business_name.toLowerCase().includes((this.FilterForm.get('NameFilter')?.value ?? "").toLowerCase()) &&
        x.industry.toLowerCase().includes((this.FilterForm.get('IndustryFilter')?.value ?? "").toLowerCase());
    })
  }

  ngDoCheck(): void {
    this.TypeFiltering();
  }
}
