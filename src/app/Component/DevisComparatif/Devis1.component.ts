import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';

@Component({
    selector: 'devisproduit',
    templateUrl: '../../View/DevisComparatif/Devis1.component.html',
    styleUrls: ['../../View/DevisComparatif/Devis1.component.css']
})
export class Devis1Component {
    typeassurance = '';
    constructor() {

    }
    update() {
        this.typeassurance = 'dommage ouvrage';
    }

}
