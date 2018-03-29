import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CreateTodosComponent } from './create-todos/create-todos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CreateTodosComponent],
  // tslint:disable-next-line:max-line-length
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
