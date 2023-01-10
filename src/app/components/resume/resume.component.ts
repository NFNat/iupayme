import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Transaction } from 'src/app/models/transactions.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAllTransactions().subscribe(
      data => {
        this.transactions = data;
      }
    )
  }

}
