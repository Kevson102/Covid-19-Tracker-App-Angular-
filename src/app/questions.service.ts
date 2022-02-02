import { environment } from './../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {


getpatient(){
  let headers = new HttpHeaders({
    'Authorization':`Token ${sessionStorage.getItem('token')}`
  })
  return this.http.get(environment.BASE_URL + 'api/Patients/',{'headers':headers});
}


getquestions(){
  let headers = new HttpHeaders({
    'Authorization':`Token ${sessionStorage.getItem('token')}`
  })
  return this.http.get(environment.BASE_URL + 'api/healthcheck/',{'headers':headers});
}

submitanswer(answers){
  // const token = sessionStorage.getItem('token')
  let headers = new HttpHeaders({
    'Authorization':`Token ${sessionStorage.getItem('token')}`
  })
  return this.http.post(environment.BASE_URL + 'api/response/',answers,{'headers':headers});
    // withCredentials: true


}


submitanswerquiz(questionId:number,answer:boolean, patientId:number) {
  let headers = new HttpHeaders({
    'Authorization':`Token ${sessionStorage.getItem('token')}`
  })
  // const token = sessionStorage.getItem('token')
  return this.http.post (environment.BASE_URL + 'api/response/',{question:questionId, answer:answer,patient:patientId},{
    headers:headers// {'Content-Type': 'application/json',Authorization: 'Bearer ' + token},
    // withCredentials: true
  });

}

getall(){
  let headers = new HttpHeaders({
    'Authorization':`Token ${sessionStorage.getItem('token')}`
  })
  return this.http.get(environment.BASE_URL + 'api/response/',{'headers':headers});
}

getDoctorresponse(){
  let headers = new HttpHeaders({
    'Authorization':`Token ${sessionStorage.getItem('token')}`
  })
  return this.http.get(environment.BASE_URL + 'api/medicaltest/',{'headers':headers});
}



GetAllAnswers(){
  return this.http.get(environment.BASE_URL + 'api/get_answers/');

}
  constructor(private http :HttpClient) { }
}


