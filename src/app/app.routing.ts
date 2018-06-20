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
import {AlertedoublegarantieComponent} from './Component/DevisComparatif/Alertedoublegarantie.component';
import { LoginespaceclientComponent } from './Component/DevisComparatif/Loginespaceclient.component';
import { MdpoublieComponent } from './Component/DevisComparatif/mdpoublie.component';
import { EspaceClientComponent } from './Component/EspaceClient/EspaceClient.component';
import { EcDemandesComponent } from './Component/EspaceClient/EcDemandes.component';
import { ECpaiementprimeComponent } from './Component/EspaceClient/ECpaiementprime.component';
import { RenonciationComponent } from './Component/EspaceClient/Renonciation.component';
import { UploadComponent } from './Component/EspaceClient/Upload.component';
import { DesabonnerComponent } from './Component/EspaceClient/Desabonner.component';
import { NouvelSituationComponent } from './Component/EspaceClient/NouvelSituation.component';

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
    },
    {
        path: 'ECpwdoublie',
        component: MdpoublieComponent
    },
    {

        path: 'alerte',
        component: AlertedoublegarantieComponent
    },
    {
        path: 'espaceclient',
        component: EspaceClientComponent

    },
    {
        path: 'EcDemandes',
        component: EcDemandesComponent
    },
    {
        path: 'paiementprime',
        component: ECpaiementprimeComponent
    },
    {
        path: 'Renonciation',
        component: RenonciationComponent
    },
    {
        path: 'Upload',
        component: UploadComponent
    },
    {
        path: 'desabonnement',
        component: DesabonnerComponent
    },
    {
        path: 'nouvelsituationRC',
        component: NouvelSituationComponent
    },
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
