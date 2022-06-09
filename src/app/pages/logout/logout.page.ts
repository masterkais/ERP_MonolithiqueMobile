import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.logout();
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl("/login");
  }
}
