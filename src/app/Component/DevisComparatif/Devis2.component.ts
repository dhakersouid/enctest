import { FormulaireService } from '../../Services/Devis2/formulaire.service';
import { Component, OnInit, Input } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { Formulaire } from '../../Models/formulaire';
import { MatSelectModule } from '@angular/material/select';
@Component({
    selector: 'devisPJentreprise',
    templateUrl: '../../View/DevisComparatif/Devis2.component.html',
    styleUrls: ['../../View/DevisComparatif/Devis2.component.css'],
    providers: [FormulaireService]
})
export class Devis2Component implements OnInit {
    effectifs: Nbreffectif[] ;
    private nbreffectif: string;
    private siren = '';
    public formulaire = new Formulaire();
    model: any = {};
    res: any;
    results: Object;
    public errormsg;
    constructor( private httpclient: HttpClient , private formulaireservice: FormulaireService ) {
        this.errormsg = '';
    }
    ngOnInit() {
        this.effectifs = [
            { value: '1', viewValue: '1' },
            { value: '20', viewValue: '20' },
            { value: '30', viewValue: '30' },
            { value: '20', viewValue: '40' },
            { value: '30', viewValue: '50' }
        ];
    }

    search() {
        if (this.siren.length === 9) {
            this.formulaireservice.searchInfo(this.siren)
                .subscribe(data => this.getData(data),
                    error => this.errormsg = error
                /*this.showData(data);
                this.res = data;
                console.log(data.siege_social.departement_commune_siege);*/
            );
        }
}


    getData (data) {
        console.log(data);
        this.errormsg = '';

       this.formulaire.siren = data.siege_social.siren;
       this.formulaire.code_ape = data.siege_social.activite_principale + ' ' + data.siege_social.libelle_activite_principale;
       this.formulaire.effectif = data.siege_social.tranche_effectif_salarie;
       this.formulaire.annee_creation = data.siege_social.date_creation_entreprise.substr(0, 4);
       this.formulaire.code_postal = data.siege_social.code_postal;
       this.formulaire.forme_juridique = data.siege_social.libelle_nature_juridique_entreprise;
       this.formulaire.chiffre_affaire = data.tranche_chiffre_affaire_entreprise_esa;
      // this.nbreffectif = data.siege_social.tranche_effectif_salarie;

        //localStorage.setItem('siren', JSON.parse(data));
        //this.res = localStorage.getItem('siren');
        //console.log(data.siege_social.departement_commune_siege);


    }
}

export interface Nbreffectif {
    value: string;
    viewValue: string;
}
