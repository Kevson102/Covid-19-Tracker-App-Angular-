import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  register;
  constructor(private accountsService:AccountsService) {}

  username:any;
  email:any;
  password:any;



  registerUser(){
    let form = new FormData()
    form.append('username',this.username)
    form.append('email',this.email)
    form.append('password',this.password)
    this.accountsService.register(form)
  }

  ngOnInit(): void {
  }

}
