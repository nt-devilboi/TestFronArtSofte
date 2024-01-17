import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../Services/company.service";
import {map, tap} from "rxjs";
import {CompanyStore} from "../../Services/company-store.service";
import {CompanyItem} from "../../Interfaces/CompanyItem";

@Component({
    selector: 'app-company-list',
    templateUrl: './company-list.component.html',
    styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
    constructor(private CompaniesService: CompanyService, private CompanyStore: CompanyStore) {
    }


    ngOnInit(): void {
        var companies = this.CompaniesService.GetCompany(50);
        companies.subscribe(x => this.CompanyStore.Set(x));
    }

    public Companies(): ReadonlyArray<CompanyItem> {
        return this.CompanyStore.Get();
    }
}
