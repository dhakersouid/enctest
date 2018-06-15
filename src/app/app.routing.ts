import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './Component/Conseil/Accueil.component';
import { Devis1Component } from './Component/DevisComparatif/Devis1.component';
import { Devis2Component } from './Component/DevisComparatif/Devis2.component';
import { Devis3Component } from './Component/DevisComparatif/Devis3.component';
import { Devis6Component } from './Component/DevisComparatif/Devis6.component';
import {ResiliationComponent} from "./Component/DevisComparatif/Resiliation.component";
import {FelicitationmdploginECComponent} from "./Component/DevisComparatif/FelicitationmdploginEC.component";
import {LoginespaceclientComponent} from "./Component/DevisComparatif/Loginespaceclient.component";



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
      path: 'login',
      component: LoginespaceclientComponent
    },




];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
