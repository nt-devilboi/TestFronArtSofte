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
    return this.CompanyStore.companies;
  }

  constructor(private CompaniesService: CompanyService, private CompanyStore: CompanyStore) {
  }

  ngOnInit(): void {
    var companiesResponse = this.CompaniesService.GetCompany(50);
    companiesResponse.subscribe(x => this.CompanyStore.Set(x));
  }

  public SortByType(): void {
    this.CompanyStore.Sort((x, y) => x.type.localeCompare(y.type));
  }

  public SortByName(): void {
    this.CompanyStore.Sort((x,y) => x.business_name.localeCompare(y.business_name))
  }

  public SortByIndustry(): void {
    this.CompanyStore.Sort((i, j) =>  i.industry.localeCompare(j.industry))
  }
}
