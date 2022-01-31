import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private accountsService:AccountsService) { }

  isLoggedin=false;
  logout(){
    this.accountsService.logout()
  }

  ngOnInit(): void {
    this.accountsService.isLoggedin.subscribe(data => {this.isLoggedin=data})

    if(sessionStorage.getItem('token')){
      this.accountsService.isLoggedin.next(true);

    }
    else {this.accountsService.isLoggedin.next(false);}

  }

}
