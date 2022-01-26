import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from './user'; 

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  createUser(user: User) {
    //Log user data in console
console.log("User Name: " + user.userName);
console.log(" Have_you_lost_smell_or_test : " + user. Have_you_lost_smell_or_test );
console.log(" Do_you_have_a_sore_throat : " + user. Do_you_have_a_sore_throat );
console.log(" Are youexperiencing fatigue: " + user. Are_you_experiencing_fatigue );
console.log(" Do_you_have_a_cough: " + user. Do_you_have_a_cough );
console.log(" Do_you_have_difficulties_in_breathing: " + user. Do_you_have_difficulties_in_breathing );
console.log(" Do_you_have_a_fever: " + user. Do_you_have_a_fever );
console.log(" Do_you_have_chills: " + user. Do_you_have_chills );
console.log(" Do_you_have_a_headache: " + user. Do_you_have_a_headache );
console.log(" Do_you_have_muscle_aches: " + user. Do_you_have_muscle_aches );
console.log(" Do_you_have_nasal_congestion : " + user. Do_you_have_nasal_congestion );
console.log(" Are_you_experiencing_nausea: " + user. Are_you_experiencing_nausea );
console.log(" Are_you_experiencing_any_vomiting: " + user. Are_you_experiencing_any_vomiting );
console.log(" Do_you_have_diarrhea: " + user. Do_you_have_diarrhea );
console.log(" Close_contact_with_an_infected_person: " + user. Close_contact_with_an_infected_person );}
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

      sessionStorage.removeItem('token');
      this.snackbar.open("You were logged out!","See you later",{duration:3000})
    }

  Covid19NewsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7773d394da3b4ca6b99b1854b725f1c9';
    topHeadlines():Observable<any>
    {
      return this.http.get(this.Covid19NewsApiUrl);
    }
    
    Covid19News():Observable<any>
    {
      return this.http.get(this.Covid19NewsApiUrl);
    }
  }







