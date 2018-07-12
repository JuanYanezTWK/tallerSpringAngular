import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LlamadoService} from './llamado.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule

  ],
  exports:[
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    HttpModule,
    MatButtonModule
  ],
  providers: [LlamadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }