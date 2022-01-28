import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  isValidFormSubmitted = false;
  Have_you_lost_smell_or_test:any;
  Yes : any;
  No : any;
  // Do_you_have_a_sore_throat : boolean;
  // Are_you_experiencing_fatigue : boolean;
  // Do_you_have_a_cough : boolean;
  // Do_you_have_difficulties_in_breathing : boolean;
  // Do_you_have_a_fever : boolean;
  // Do_you_have_chills : boolean;
  // Do_you_have_a_headache : boolean;
  // Do_you_have_muscle_aches : boolean;
  // Do_you_have_nasal_congestion : boolean;
  // Are_you_experiencing_nausea : boolean;
  // Are_you_experiencing_any_vomiting : boolean;
  // Do_you_have_diarrhea : boolean;
  // Close_contact_with_an_infected_person : boolean;
  constructor(private accountsService:AccountsService) { }



checklist(){
  let form = new FormData();
  form.append('Yes',this.Yes),
  form.append('No',this.No),
  this.accountsService.checklist()

  }




ngOnInit(): void {
  this.accountsService.checklist()
}
}

























