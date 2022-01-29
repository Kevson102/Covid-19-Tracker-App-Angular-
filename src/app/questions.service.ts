import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

getquestions(){
  return this.http.get(environment.BASE_URL + 'api/healthcheck/');
}

submitanswer(answers){
  return this.http.post(environment.BASE_URL + 'api/response/',answers,{
    headers: {'Content-Type': 'application/json'},
    // withCredentials: true
  });

}


submitanswerquiz(questionId:number,answer:boolean) {
  const token = sessionStorage.getItem('token')
  return this.http.post(environment.BASE_URL + 'api/response/',{question:questionId, answer:answer,patient:0},{
    headers: {'Content-Type': 'application/json',Authorization: 'Bearer ' + token},
    // withCredentials: true
  });

}
  constructor(private http :HttpClient) { }
}
