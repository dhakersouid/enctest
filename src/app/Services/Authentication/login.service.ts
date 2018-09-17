import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../app.setting';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
declare var $: any;

@Injectable({ providedIn: 'root' })
export class LoginService {
    response: any;
    loggedIn: boolean;
    loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
    constructor(private http: HttpClient, private route: Router) {
    }

    login(username: string, password: string) {

        let url = 'http://127.0.0.1:8000/api/login_check';
        let body = new URLSearchParams();
        body.append('_username', username);
        body.append('_password', password);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http
            .post(url, { _username: username, _password: password }, httpOptions)
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    testApi(){
        return this.http.get('http://127.0.0.1:8000/api/api/testApi').pipe(
            map(res => {return res || {};} ));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.setLoggedIn(false);
    }

    setLoggedIn(value: boolean) {
        // Update login status subject
        this.loggedIn$.next(value);
        this.loggedIn = value;
    }

    private _setSession(token, user) {
        console.log(user + 'usersession');
        localStorage.setItem('token', token);
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(user);
        this.setLoggedIn(true);
    }
    getData(username: string, password: string){

        if (localStorage.getItem('currentUser')){
        }
    }
    /*getAccessToken(tken){
        return localStorage.getItem('currentUser')
    }*/

}
