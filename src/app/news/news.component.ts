import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private accountsService:AccountsService) { }
  Covid19NewsResult:any =[];

  ngOnInit(): void {
    this.accountsService.Covid19News().subscribe((result)=>{
      console.log(result);
      this.Covid19NewsResult = result.articles;
    })

  }

}
