
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '../../Models/user';

import { LoginService } from '../../Services/Authentication/login.service';
import { HttpClient } from "@angular/common/http";
@Component({ templateUrl: '../../View/DevisComparatif/Loginespaceclient.component.html',
  styleUrls: ['../../View/DevisComparatif/Loginespaceclient.component.css'] })


export class LoginespaceclientComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  user: User;
  response: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: LoginService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    /*let users: any[] = JSON.parse(localStorage.getItem('user'));
    console.log(users);*/
    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    console.log(this.model.username);
    console.log(this.model.password);
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
         this.router.navigate(['espaceclient']);
      }
      );
  }
}
