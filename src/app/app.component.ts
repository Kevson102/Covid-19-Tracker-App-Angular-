import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Covidtracker';
  faCoffee = faCoffee;
  constructor(private accountsService:AccountsService){


  }
  ngOnInit(): void {
    if(sessionStorage.getItem('token')){
      this.accountsService.isLoggedin.next(true);

    }
    else {this.accountsService.isLoggedin.next(false);}

  }
}


