import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { QuestionsService } from '../questions.service';

import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  User:any;
  questions: any = [];
  answers = {};
  patients:any = {};
  selectedPatient:any;
  users:any;

  
  constructor(private questionsService:QuestionsService, public auth: AuthService) {

    this.questionsService.getquestions().subscribe(questions =>
      {console.log(questions);

        this.questions = questions;


      });


    this.questionsService.getpatient().subscribe(patients=>
      {console.log(patients);

        this.patients = patients;


      });

      // this.questionsService.getusers().subscribe(users =>
      //   {console.log(users);

      //     this.users = users;


      //   });



   }
   isLoggedin=false;
   onsubmitAnswer(e) {
     const button=e.target
     button['disabled']=true
     button.innerHTML='saving'
     this.questionsService.submitanswer(this.answers).subscribe(response => {
       console.log(response);
       button['disabled']=false
       button.innerHTML='submit'

     })

   }

  onsubmitQuestionAnswer(questionId: number, answer:boolean,patientId:number){
    this.questionsService.submitanswerquiz(questionId, answer,patientId).subscribe(response => {
      console.log(response);
    })
  }

   onAnswer(id: number ,answer:boolean,patientId:number){
     this.answers[id]=answer;
     this.onsubmitQuestionAnswer(id,answer,patientId);

   }



onpatientSelect(evt){
  const selectElement=evt.target;
  const patientId=selectElement.querySelector('option:selected')[0].value;
  console.log(patientId);


}






   ngOnInit(): void {

    }


}


