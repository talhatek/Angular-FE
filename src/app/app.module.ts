import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"; 
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LogDetailComponent } from './log-detail/log-detail.component';
import { LogComponent } from './log-detail/log/log.component';
import { LogListComponent } from './log-detail/log-list/log-list.component';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
    LogDetailComponent,
    LogComponent,
    LogListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
