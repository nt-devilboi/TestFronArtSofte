import {Component, Input} from '@angular/core';
import {CompanyStore} from "../../Services/company-store.service";

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.css']
})
export class CompanySortComponent {
  @Input("SortBy") public SortBy?: () => void;

  constructor(private _companyStore:CompanyStore) { // ахаххахах, прикол, я типо не использую CompanyStore хотя на самом деле я перекидываю сюда функцию в котой он используется, жееееееесть, звучит как костыль // todo: хочу получить ответ: это костыль или норм?
  }

  public sort() {
    if (this.SortBy != undefined) this.SortBy();
  }
}
