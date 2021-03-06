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
import { AproposComponent} from './Component/Conseil/Apropos.component';
import { GCUComponent} from './Component/Conseil/GCU.component';
import { ContactComponent} from './Component/Conseil/Contact.component';
import { MentionlegaleComponent} from './Component/Conseil/Mentionlegale.component';
import {ParlezavosamisComponent} from './Component/Conseil/Parlezavosamis.component';
import {ConseiltoutesquestionsComponent} from './Component/Conseil/Conseiltoutesquestions.component';
import { ConseilComponent } from './Component/Conseil/Conseil.component';
import { AssuranceComponent } from './Component/Conseil/Vosassurance.component';
import { RecevoirconseilComponent } from './Component/Conseil/Recevoirconseil.component';
import { FelicitationRecevoirConseilComponent } from './Component/Conseil/FelicitationRecevoirConseil.component';
import { CommentaireComponent } from './Component/Conseil/Commentaire.component';
import { ConseilDefinitionComponent } from './Component/Conseil/ConseilDefinition.component';
import { RecevoirDefinitionComponent } from './Component/Conseil/RecevoirDefinition.component';
import { AuthGuard } from './_guard/auth.guard';

import { DeclarationsinistreComponent } from './Component/EspaceClient/Declarationsinistre.component';
import { PartenaireassureurComponent } from './Component/Conseil/Partenaireassureur.component';
import { ModalitepaiementComponent } from './Component/Conseil/Modalitepaiement.component';

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
        component: EspaceClientComponent,
        canActivate: [AuthGuard]

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
    {
    path: 'apropos',
    component: AproposComponent
    },
    {
    path: 'gcu',
    component: GCUComponent
    },
    {
    path: 'contact',
    component: ContactComponent
    },
    {
    path: 'mention',
    component: MentionlegaleComponent
    },
    {
    path: 'modalite',
    component: MentionlegaleComponent
    },
    {
    path: 'parlez',
    component: ParlezavosamisComponent
    },
    {
    path: 'question',
    component: ConseiltoutesquestionsComponent
    },
    {
        path: 'conseil',
        component: ConseilComponent
    },
    {
        path: 'vosassurances',
        component: AssuranceComponent
    },
    {
        path: 'conseilrecevoirconseil',
        component: RecevoirconseilComponent
    },
    {
        path: 'felicitationrecevoirconseil',
        component: FelicitationRecevoirConseilComponent
    },
    {
        path: 'commentaire',
        component: CommentaireComponent
    },
    {
        path: 'conseildefinitionpj',
        component: ConseilDefinitionComponent
    },
    {
        path: 'recevoirdefinition',
        component: RecevoirDefinitionComponent
    },
    {
        path: 'sinistre',
        component: DeclarationsinistreComponent
    },
    {
        path: 'partenaire',
        component: PartenaireassureurComponent
    },
    {
        path: 'modalite',
        component: ModalitepaiementComponent
    },

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
