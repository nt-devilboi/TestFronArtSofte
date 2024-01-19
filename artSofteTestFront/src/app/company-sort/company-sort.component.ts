import {Component, Input} from '@angular/core';
import {CompanyStore} from "../../Services/company-store.service";

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.css']
})
export class CompanySortComponent {
  @Input("SortBy") public SortBy?: () => void;

  constructor(private CompanyStore:CompanyStore) { // ахаххахах, прикол, я типо не использую CompanyStore хотя на самом деле я передовую сюда функцию в котой он используется, жееееееесть, звучит как костыль // todo: задать вопрос
  }

  public sort() {
    if (this.SortBy != undefined) this.SortBy();
  }
}
