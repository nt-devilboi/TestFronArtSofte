import {Injectable} from "@angular/core";
import {CompanyItem} from "../Interfaces/CompanyItem";

@Injectable({
    providedIn: 'root'
})
export class CompanyStore {
    public companies: CompanyItem[] = []

    public Set(companies: CompanyItem[]) {
        this.companies = companies;
    }

    public Get(): ReadonlyArray<CompanyItem> {
        return this.companies;
    }

    public getById(id: number): CompanyItem | undefined {
        return this.companies.find(x => x.id == id)
    }
}
