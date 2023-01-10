import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/models/account.model';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

accounts: Account[] = [];

  constructor( private accountService: AccountService ) { }

  ngOnInit(): void {

    this.accountService.getAll().subscribe(
      data => {
        this.accounts = data;
      } )
  }

}
