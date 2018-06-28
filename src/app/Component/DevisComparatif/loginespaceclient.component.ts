import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: '../../View/DevisComparatif/Loginespaceclient.component.html',
  styleUrls: ['../../View/DevisComparatif/Loginespaceclient.component.css']
})

export class LoginespaceclientComponent {


  users = [];
  posts = [];
  constructor() {

  }



  ngOnInit() {
    console.log('hit');
  }



}
