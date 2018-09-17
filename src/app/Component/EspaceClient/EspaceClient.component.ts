import { User } from '../../Models/user';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from "@angular/core";
@Component({
    selector: 'espaceclient',
    templateUrl: '../../View/EspaceClient/EspaceClient.component.html',
    styleUrls: ['../../View/EspaceClient/EspaceClient.component.css']
})

export class EspaceClientComponent implements OnInit {
    private data: any;
    private userData: any ;
    private datePipe = new DatePipe('en-US');
    constructor() {

    }
    ngOnInit(): void {
        this.userData = new User();
        this.data = JSON.parse(localStorage.getItem('currentUser'));
        //this.data.user.last_login.date.timestamp = new Date(parseInt(this.data.user.last_login.date.timestamp.substr(6)));
        this.userData.firstName = this.data.user.UserName;
        this.userData.last_login = this.datePipe.transform(this.data.user.last_login.date, 'dd/MM/yyyy');
        //console.log(this.data.user.last_login.date.timestamp);
    }


}
/*
@Pipe({ name: 'toDate' })
export class StringToDate implements PipeTransform {
    transform(value, [exponent]): number {
        if (value) {
            return new Date(value);
        }
    }
}
*/