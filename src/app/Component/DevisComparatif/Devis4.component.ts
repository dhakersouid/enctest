import { Formulaire } from '../../Models/formulaire';
import { Devis2Component } from './Devis2.component';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'devisPJprofil',
    templateUrl: '../../View/DevisComparatif/Devis4.component.html',
    styleUrls: ['../../View/DevisComparatif/Devis4.component.css']
})
export class Devis4Component implements OnInit {

    private data: any;
    public formulaire = new Formulaire();
    constructor( ) {

    }
    ngOnInit() {
        localStorage.removeItem('siren');
        localStorage.removeItem('information');
        this.remplirFormulaire();
    }
    remplirFormulaire() {
        this.data = JSON.parse(localStorage.getItem('informationUser'));
        this.formulaire.nom_entreprise = this.data.siege_social.nom_raison_sociale;
        this.formulaire.siret = this.data.siege_social.siret;
        this.formulaire.adresse = this.data.siege_social.geo_adresse;
        this.formulaire.code_ape = this.data.siege_social.activite_principale_entreprise;
        this.formulaire.code_postal = this.data.siege_social.code_postal;
       //.formulaire.code_ape = data.siege_social.actifit
       
    }
}
