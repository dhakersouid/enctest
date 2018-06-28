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
import {AlertedoublegarantieComponent} from './Component/DevisComparatif/Alertedoublegarantie.component';
import { MdpoublieComponent } from './Component/DevisComparatif/mdpoublie.component';
import { ResiliationlaposteComponent } from './Component/DevisComparatif/Resiliationlaposte.component';
import { EspaceClientComponent } from './Component/EspaceClient/EspaceClient.component';
import { EcDemandesComponent } from './Component/EspaceClient/EcDemandes.component';
import { ECpaiementprimeComponent } from './Component/EspaceClient/ECpaiementprime.component';
import { RenonciationComponent } from './Component/EspaceClient/Renonciation.component';
import { UploadComponent } from './Component/EspaceClient/Upload.component';
import { DesabonnerComponent } from './Component/EspaceClient/Desabonner.component';
import { NouvelSituationComponent } from './Component/EspaceClient/NouvelSituation.component';
import { LoginespaceclientComponent } from './Component/DevisComparatif/Loginespaceclient.component';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Headers } from '@angular/http';
import { MatChipsModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {
  WpApiModule,
  WpApiLoader,
  WpApiStaticLoader
} from 'wp-api-angular';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UserListComponent } from './user-list/user-list.component';
export function WpApiLoaderFactory(http: Http) {
  return new WpApiStaticLoader(http, 'http://envdev.brokins.fr/wp-json/wp/v2/', '');
}
@NgModule({
  declarations: [
    AppComponent, AccueilComponent, headerComponent, footerComponent, Devis1Component, Devis2Component, Devis3Component
    , RecevoirTarifComponent, Devis4Component, Devis6Component, ResiliationComponent,

    FelicitationmdploginECComponent, FelicitationsouscriptionComponent, Devis5Component,
    AlertedoublegarantieComponent, LoginespaceclientComponent,
    MdpoublieComponent, ResiliationlaposteComponent, EspaceClientComponent, EcDemandesComponent,
    ECpaiementprimeComponent, RenonciationComponent, UploadComponent, DesabonnerComponent,
     NouvelSituationComponent, AuthenticationComponent, UserListComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, HttpClientModule, MatChipsModule, MatFormFieldModule, MatInputModule, // <---
    WpApiModule.forRoot({ // <---
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [Http]
    })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
