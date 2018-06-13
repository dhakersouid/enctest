import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { AccueilComponent } from './Component/Conseil/Accueil.component';
import { headerComponent } from './header.component';
import { footerComponent } from './footer.component';
import { Devis1Component } from './Component/DevisComparatif/Devis1.component';
@NgModule({
  declarations: [
    AppComponent, AccueilComponent, headerComponent, footerComponent, Devis1Component
  ],
  imports: [
    BrowserModule, FormsModule, routing
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
