import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

declare var $: any;

@Injectable({ providedIn: 'root' })
export class FormulaireService {
    baseUrl: String = 'https://sirene.entreprise.api.gouv.fr/v1/siren/';
    queryUrl: String = '';

    constructor(private http: Http) { }

    searchInfo(siren) {
        return this.http
            .get(this.baseUrl + siren)
            .catch(this.errorHandler)
            .map(res => res.json());
    }

    errorHandler(error: HttpErrorResponse) {
        return Observable.throw(error.message || 'Siren introuvable');
    }

}
