import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  baseUrl: string = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/";
  covidBaseUrl = "https://covid-193.p.rapidapi.com/"
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


  checklist(){
    this.http.get(`${environment.BASE_URL}api/healthcheck/`).subscribe((res:any)=>{
      sessionStorage.setItem('token', res['token'])
      console.log(res)
      this.route.navigate(['']);
    },error=>{
      this.snackbar.open(`There is a problem saving Form.`,"Dismiss",{duration:3000})

      console.log(error)
    })

  //     this.http.post    (`${environment.BASE_URL}api/healthcheck/`,credentials).subscribe((res:any)=>{
  //       sessionStorage.setItem('token', res['token'])
  //       this.route.navigate(['homepage']);
  //     },error=>{
  //       this.snackbar.open(`There is a problem saving Form.`,"Dismiss",{duration:3000})

  //       console.log(error)
  //   })
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

  getCovid19Data() {
    return this.http.get(this.baseUrl + 'stats', {
      headers: {
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "16c4042140mshf206cd74ee2903dp1622efjsnd448d87eb2c8"
      }
    });
  }

  getCovid19CountryList() {
    return this.http.get(this.covidBaseUrl + "countries", {
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "16c4042140mshf206cd74ee2903dp1622efjsnd448d87eb2c8"
      }
    });
  }

  getCovid19Stats() {
    return this.http.get(this.covidBaseUrl + "statistics", {
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "16c4042140mshf206cd74ee2903dp1622efjsnd448d87eb2c8"
      }
    });

  }
}
