import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { User } from '../user';
@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  isValidFormSubmitted = false;
	user = new User();
  constructor(private accountsService:AccountsService) { }

  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if(form.invalid){
     return;	
    } 	
    this.isValidFormSubmitted = true;
    this.user.userName = form.controls['uname'].value;
    this.user. Have_you_lost_smell_or_test  = form.controls[' Have_you_lost_smell_or_test '].value;
    this.user. Are_you_experiencing_fatigue = form.controls[' Are_you_experiencing_fatigue'].value;
    this.user. Do_you_have_a_cough          = form.controls[' Do_you_have_a_cough '].value;
    this.user. Do_you_have_difficulties_in_breathing  = form.controls[' Do_you_have_difficulties_in_breathing '].value;
    this.user. Do_you_have_a_fever          = form.controls[' Do_you_have_a_fever'].value;
    this.user. Do_you_have_chills  = form.controls[' Do_you_have_chills '].value;
    this.user. Do_you_have_a_headache  = form.controls[' Do_you_have_a_headache'].value;
    this.user. Do_you_have_muscle_aches     = form.controls[' Do_you_have_muscle_aches'].value;
    this.user. Do_you_have_nasal_congestion = form.controls[' Do_you_have_nasal_congestion'].value;
    this.user. Are_you_experiencing_nausea  = form.controls[' Are_you_experiencing_nausea '].value;
    this.user. Are_you_experiencing_any_vomiting  = form.controls[' Are_you_experiencing_any_vomiting '].value;
    this.user. Do_you_have_diarrhea     = form.controls[' Do_you_have_diarrhea'].value;
    this.user. Have_you_lost_smell_or_test  = form.controls[' Have_you_lost_smell_or_test '].value;
    this.user. Close_contact_with_an_infected_person     = form.controls[' Close_contact_with_an_infected_person'].value;

    this.accountsService.createUser(this.user);
    this.resetForm(form);
 }
 resetForm(form: NgForm) {
    this.user = new User();
 }	

 ngOnInit(): void {
 }

}


