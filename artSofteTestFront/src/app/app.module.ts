import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {RoutingModule} from "./routing/routing.module";
import {HttpClientModule} from "@angular/common/http";
import { CompanyItemComponent } from './company-view/company-item.component';
import { CompanySortComponent } from './company-sort/company-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyYandexMapComponent,
    LayoutComponent,
    CompanyItemComponent,
    CompanySortComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
