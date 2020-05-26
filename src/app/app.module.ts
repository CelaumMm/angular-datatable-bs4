import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { DataTableComponent } from './datatable/datatable.component';

@NgModule({
    declarations: [
        AppComponent,
        DataTableComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        DataTablesModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
