import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './Component/Conseil/Accueil.component';
import { Devis1Component } from './Component/DevisComparatif/Devis1.component';
import { Devis2Component } from './Component/DevisComparatif/Devis2.component';
import { Devis3Component } from './Component/DevisComparatif/Devis3.component';
import { Devis4Component } from './Component/DevisComparatif/Devis4.component';
import { Devis6Component } from './Component/DevisComparatif/Devis6.component';
import { ResiliationComponent } from './Component/DevisComparatif/Resiliation.component';
import { RecevoirTarifComponent } from './Component/DevisComparatif/RecevoirTarif.component';
import {FelicitationmdploginECComponent} from './Component/DevisComparatif/FelicitationmdploginEC.component';
import {FelicitationsouscriptionComponent} from './Component/DevisComparatif/Felicitationsouscription.component';
import { Devis5Component } from './Component/DevisComparatif/Devis5.component';
import {LoginespaceclientComponent} from "./Component/DevisComparatif/loginespaceclient.component";
import {AlertedoublegarantieComponent} from "./Component/DevisComparatif/Alertedoublegarantie.component";
import { LoginespaceclientComponent } from './Component/DevisComparatif/Loginespaceclient.component';
import { MdpoublieComponent } from './Component/DevisComparatif/mdpoublie.component';
import { ResiliationlaposteComponent } from './Component/DevisComparatif/Resiliationlaposte.component';
import { EspaceClientComponent } from './Component/EspaceClient/EspaceClient.component';


const appRoutes: Routes = [
    {
        path: '',
        component: AccueilComponent
    },
    {
        path: 'devisproduit',
        component: Devis1Component
    },
    {
        path: 'devisPJentreprise',
        component: Devis2Component
    },
    {
        path: 'devisPJcomparatif',
        component: Devis3Component
    },
    {
        path: 'paiement',
        component: Devis6Component
    },
    {
        path: 'resiliation',
        component: ResiliationComponent
    },
    {
        path: 'felicitationmdplogin',
        component: FelicitationmdploginECComponent
    },
    {
        path: 'devisPJrecevoirTarif',
        component: RecevoirTarifComponent
    },
    {
        path: 'devisPJprofil',
        component: Devis4Component
    },
    {
        path: 'devisPJproposition',
        component: Devis5Component
    },
    {
        path: 'souscription',
        component: FelicitationsouscriptionComponent
    },
    {
        path: 'login',
        component: LoginespaceclientComponent
    },
    {
        path: 'alerte',
        component: AlertedoublegarantieComponent

        path: 'ECpwdoublie',
        component: MdpoublieComponent
    },
    {
        path: 'paiementlaposte',
        component: ResiliationlaposteComponent
    },
    {

        path: 'alerte',
        component: AlertedoublegarantieComponent

        path: 'espaceclient',
        component: EspaceClientComponent

    },

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
