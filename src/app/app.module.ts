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
import { Devis2Component } from './Component/DevisComparatif/Devis2.component';
import { Devis3Component } from './Component/DevisComparatif/Devis3.component';
import { Devis4Component } from './Component/DevisComparatif/Devis4.component';
import { RecevoirTarifComponent } from './Component/DevisComparatif/RecevoirTarif.component';
import { Devis6Component } from './Component/DevisComparatif/Devis6.component';
import {ResiliationComponent} from './Component/DevisComparatif/Resiliation.component';
import {FelicitationmdploginECComponent} from './Component/DevisComparatif/FelicitationmdploginEC.component';
import {FelicitationsouscriptionComponent} from './Component/DevisComparatif/Felicitationsouscription.component';
import { Devis5Component } from './Component/DevisComparatif/Devis5.component';
import { LoginespaceclientComponent } from './Component/DevisComparatif/Loginespaceclient.component';
import { MdpoublieComponent } from './Component/DevisComparatif/mdpoublie.component';
import { ResiliationlaposteComponent } from './Component/DevisComparatif/Resiliationlaposte.component';
import { EspaceClientComponent } from './Component/EspaceClient/EspaceClient.component';

@NgModule({
  declarations: [
    AppComponent, AccueilComponent, headerComponent, footerComponent, Devis1Component, Devis2Component, Devis3Component
    , RecevoirTarifComponent, Devis4Component, Devis6Component, ResiliationComponent,
    FelicitationmdploginECComponent, FelicitationsouscriptionComponent, Devis5Component, LoginespaceclientComponent,
    MdpoublieComponent, ResiliationlaposteComponent, EspaceClientComponent
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
