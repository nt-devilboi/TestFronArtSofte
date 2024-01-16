import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "../layout/layout.component";
import {CompanyListComponent} from "../company-list/company-list.component";
import {CompanyDetailComponent} from "../company-detail/company-detail.component";
import {CompanyYandexMapComponent} from "../company-yandex-map/company-yandex-map.component";

const routes: Routes = [
  {
    path: "", component: LayoutComponent, children: [
      {path: "list", component: CompanyListComponent},
      {path: "detail:id", component: CompanyDetailComponent},
      {path: "map", component: CompanyYandexMapComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
