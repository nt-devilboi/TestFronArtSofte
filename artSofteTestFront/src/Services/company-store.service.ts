import {Injectable} from "@angular/core";
import {CompanyItem} from "../Interfaces/CompanyItem";
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CompanyStore {
    public companies$: Subject<CompanyItem[]> = new Subject<CompanyItem[]>;
    public companies: CompanyItem[] = [];
    public AllCompanies: CompanyItem[] = [];

    get Companies(): ReadonlyArray<CompanyItem> {
        return this.companies;
    }

    constructor() {
        this.companies$.subscribe(x => this.companies = x)
    }

    public Set(companies: CompanyItem[]) {
        this.companies$.next(companies);
        this.AllCompanies = this.companies;
    }

    public Sort(action: (i: CompanyItem, j: CompanyItem) => number): void {
        this.AllCompanies = this.AllCompanies.sort(action);
        this.companies$.next(this.AllCompanies);
    }

    public Filter(predicate: (value: CompanyItem, index: number, array?: CompanyItem[]) => unknown): void {
        var companiesFilter = this.AllCompanies.filter(predicate)
        this.companies$.next(companiesFilter);
    }
}
