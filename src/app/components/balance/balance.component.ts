import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  accounts: Account[] = [];
  accountChosen: Account = {
    id: '',
    name: '',
    cliente: '',
    saldo:0
  }

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {

    this.accountService.getAccount("1").subscribe(
      data => {
        this.accountChosen = data;
      } )
  }





}
