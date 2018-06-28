import { Component, OnInit, Input } from '@angular/core';
import { WpApiUsers } from 'wp-api-angular';
import { WpApiPosts } from 'wp-api-angular';
import { Headers } from '@angular/http';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [];
  posts = [];
  constructor(private wpApiUsers: WpApiUsers, private wpApiPosts: WpApiPosts) {
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
  }

}
