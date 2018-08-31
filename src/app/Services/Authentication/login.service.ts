import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../app.setting';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

declare var $: any;

@Injectable({ providedIn: 'root' })
export class LoginService {
    response: any;
    loggedIn: boolean;
    loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
    constructor(private http: HttpClient, private route: Router) {
    }

    login(username: string, password: string) {
        const formData = {
            username: username,
            password: password
        };
        return this.http.post<any>('http://127.0.0.1:8000/api/login_check', $.param(formData))
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                //console.log(JSON.parse(user));
                if (user && user.token) {
                    console.log(user);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }));
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
