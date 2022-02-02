import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private accountsService:AccountsService) {}



  username: any;
  password: any; 


  loginUser(){
    let form = new FormData();
    form.append('username',this.username),
    form.append('password',this.password),
    this.accountsService.login(form)
  }


  ngOnInit(): void {
  }

}



