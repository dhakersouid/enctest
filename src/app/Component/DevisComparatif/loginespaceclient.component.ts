import { Component, OnInit} from '@angular/core';
import { WpApiUsers } from 'wp-api-angular';
import { WpApiPosts } from 'wp-api-angular';
import { Headers } from '@angular/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'login',
  templateUrl: '../../View/DevisComparatif/Loginespaceclient.component.html',
  styleUrls: ['../../View/DevisComparatif/Loginespaceclient.component.css']
})

export class LoginespaceclientComponent {


  users = [];
  posts = [];
  constructor(private wpApiUsers: WpApiUsers, private wpApiPosts: WpApiPosts, private router: Router) {
    this.getUserList();
    this.getPostList();
  }

  getUserList() {
    this.wpApiUsers.getList()
      .toPromise()
      .then(response => {
        let json: any = response.json();
        this.users = json;
      });
  }
  getPostList() {
    this.wpApiPosts.getList()
      .toPromise()
      .then(response => {
        let json: any = response.json();
        this.posts = json;
      });
  }

  ngOnInit() {
    console.log('hit');
  }

  loginUser(e : NgForm) {
   
    console.log(e);
    const nomentreprise = e.form.value.nomentreprise;
    const mail = e.form.value.mail;
    console.log(nomentreprise);
    console.log(mail);
    console.log(this.users[0]);
    console.log(this.users.includes(mail));
    if (nomentreprise == 'admin' && this.users.includes(mail)) {
      console.log('pass');
      this.router.navigate(['espaceclient']);
    } else {
      console.log('fail');
    }
  }

}
