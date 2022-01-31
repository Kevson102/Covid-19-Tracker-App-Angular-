import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private accountsService:AccountsService) { }

  isLoggedin =false;

  ngOnInit(): void {
  }

}
