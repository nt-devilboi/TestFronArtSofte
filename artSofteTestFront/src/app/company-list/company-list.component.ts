import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../Services/company.service";
import {async, map, Observable, Subject, tap} from "rxjs";
import {CompanyStore} from "../../Services/company-store.service";
import {CompanyItem} from "../../Interfaces/CompanyItem";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  get Companies(): CompanyItem[] {
    return this._companyStore.companies;
  }

  constructor(private _companiesService: CompanyService, private _companyStore: CompanyStore) {
  }

  ngOnInit(): void {
    var companiesResponse = this._companiesService.GetCompany(50);
    companiesResponse.subscribe(x => this._companyStore.Set(x));
  }

  public sortByType(): void {
    this._companyStore.Sort((x, y) => x.type.localeCompare(y.type));
  }

  public sortByName(): void {
    this._companyStore.Sort((x, y) => x.business_name.localeCompare(y.business_name))
  }

  public sortByIndustry(): void {
    this._companyStore.Sort((i, j) =>  i.industry.localeCompare(j.industry))
  }
}
