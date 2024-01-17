import {Component, OnInit} from '@angular/core';
import {CompanyStore} from "../../Services/company-store.service";
import {CompanyItem} from "../../Interfaces/CompanyItem";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-company-detail',
    templateUrl: './company-detail.component.html',
    styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit{
    public company?: CompanyItem
    constructor(private _companyStore: CompanyStore, private _route: ActivatedRoute) {
    }


    ngOnInit(): void {
        this._route.params.subscribe(p => this.company = this._companyStore.getById(p['id']))
    }
}
