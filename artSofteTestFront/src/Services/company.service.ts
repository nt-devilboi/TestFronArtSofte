import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {every, map, Observable} from "rxjs";
import {CompanyItem} from "../Interfaces/CompanyItem";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private readonly _http: HttpClient

  constructor(http: HttpClient) {
    this._http = http;
  }

  public GetCompany(size: number): Observable<CompanyItem[]> {
    return this._http.get<CompanyItem[]>(`https://random-data-api.com/api/company/random_company?size=${size}`)
  }
}
