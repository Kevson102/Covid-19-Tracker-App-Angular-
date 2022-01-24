import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient,private route:Router,private authService:AuthService, private snackbar:MatSnackBar){ }

  login(credentials:any){
    this.http.post(`${environment.BASE_URL}api/login/`,credentials).subscribe((res:any)=>{
      sessionStorage.setItem('token', res['token'])
      this.authService.authentication(true)
      this.snackbar.open(`Welcome to Infra Health ${credentials.get('username')}`,"Dismiss")
      this.route.navigate(['homepage']);
    },error=>{
      this.snackbar.open(`There was a problem logging you in, please check your credentials and try again.`,"Dismiss",{duration:3000})

      console.log(error)
    })
  }

  register(credentials:any){
    this.http.post(`${environment.BASE_URL}api/register/`,credentials).subscribe(response=>{
      this.snackbar.open(`Congratulations ${credentials.get('username')}, your account was successfully created`,"Thank you")
    },error => {
      this.snackbar.open(`There was a problem creating your account, please check your credentials and try again.`,"Dismiss",{duration:3000})
      console.log(error)
    })
  }

  logout(){
    sessionStorage.removeItem('token')
    this.authService.authentication(false)
  }
}



