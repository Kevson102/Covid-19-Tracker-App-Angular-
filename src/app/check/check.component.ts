import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { QuestionsService } from '../questions.service';

import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  questions: any = [];
  answers = {};

  constructor(private questionsService:QuestionsService) {

    this.questionsService.getquestions().subscribe(questions =>
      {console.log(questions);

        this.questions = questions;


      });

   }

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

  onsubmitQuestionAnswer(questionId: number, answer:boolean){
    this.questionsService.submitanswerquiz(questionId, answer).subscribe(response => {
      console.log(response);
    })
  }

   onAnswer(id: number ,answer:boolean){
     this.answers[id]=answer;
     this.onsubmitQuestionAnswer(id,answer);

   }








   ngOnInit(): void {

    }


}


//   isValidFormSubmitted = false;
//   Have_you_lost_smell_or_test:any;
//   Yes : any;
//   No : any;
//   // Do_you_have_a_sore_throat : boolean;
//   // Are_you_experiencing_fatigue : boolean;
//   // Do_you_have_a_cough : boolean;
//   // Do_you_have_difficulties_in_breathing : boolean;
//   // Do_you_have_a_fever : boolean;
//   // Do_you_have_chills : boolean;
//   // Do_you_have_a_headache : boolean;
//   // Do_you_have_muscle_aches : boolean;
//   // Do_you_have_nasal_congestion : boolean;
//   // Are_you_experiencing_nausea : boolean;
//   // Are_you_experiencing_any_vomiting : boolean;
//   // Do_you_have_diarrhea : boolean;
//   // Close_contact_with_an_infected_person : boolean;
//   constructor(private accountsService:AccountsService) { }



// // checklist(){
// //   let form = new FormData();
// //   form.append('Yes',this.Yes),
// //   form.append('No',this.No),
// //   this.accountsService.checklist()

// //   }

// profileForm = this.fb.group({
//   firstName: ['', Validators.required],
//   lastName: [''],
//   address: this.fb.group({
//     street: [''],
//     city: [''],
//     state: [''],
//     zip: ['']
//   }),
//   aliases: this.fb.array([
//     this.fb.control('')
//   ])
// });


// addAlias() {
//   this.aliases.push(this.fb.control(''));
// }

// ngOnInit(): void {
//   this.accountsService.checklist()
// }


























