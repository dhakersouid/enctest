import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './Component/Conseil/Accueil.component';

import { Devis1Component } from './Component/DevisComparatif/Devis1.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AccueilComponent
    },
    {
        path: 'devisproduit',
        component: Devis1Component
    },

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);