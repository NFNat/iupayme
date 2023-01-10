import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';
import { Transaction } from '../models/transactions.model';
import { Card } from '../models/cards.model';




@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private url = 'https://fakeappi.onrender.com'

  constructor(private http: HttpClient) { }



getAll(){
  return this.http.get<Account[]>(`${this.url}/cuenta`);
}

getAccount(id: string){
  return this.http.get<Account>(`${this.url}/cuenta/${id}`)
}

getAllTransactions(){
  return this.http.get<Transaction[]>(`${this.url}/transactions`);
}

getAllCards(){
  return this.http.get<Card[]>(`${this.url}/cards`);
}
getOneCard(id: string){
  return this.http.get<Card>(`${this.url}/cards/${id}`)
}
}
