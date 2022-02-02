import { QuestionsService } from './../questions.service';
import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  User:any;
  questions: any = [];
  answers :boolean;
  patients:any = {};
  response:any=[];
  tests:any=[];

  constructor(private accountsService:AccountsService,private questionsService:QuestionsService) {


    this.questionsService.getquestions().subscribe(questions =>
      {console.log(questions);

        this.questions = questions;


      });

    this.questionsService.getall().subscribe(response =>
      {console.log(response);

        this.response= response;


      });


      this.questionsService.getDoctorresponse().subscribe(response =>
        {console.log(response);

          this.tests= response;


        });
   }

  isLoggedin =false;




  ngOnInit(): void {
  }

}
