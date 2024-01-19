import {Injectable} from "@angular/core";
import {CompanyItem} from "../Interfaces/CompanyItem";
import {find, map, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyStore {
  public companies$: Subject<CompanyItem[]> = new Subject<CompanyItem[]>;
  public companies: CompanyItem[] = []

  constructor() {
    this.companies$.subscribe(x => this.companies = x)
  }
  public Set(companies: CompanyItem[]) {
    this.companies$.next(companies);
  }

  public subscribe(data: CompanyItem[]): void {
    this.companies$.subscribe(x => data = x);
  }

  public Sort(action: (i: CompanyItem, j: CompanyItem) => number): void {
    var CompaniesSorted = this.companies.sort(action);
    this.companies$.next(CompaniesSorted)
  }
}
