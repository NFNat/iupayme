import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/cards.model';
import { AccountService } from 'src/app/services/account.service';





@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {
cards: Card[] = [];
cardChosen: Card = {
  id: '',
  number1: '',
  number2: '',
  number3: '',
  number4:'',
  balance: 0,
  type: ''
}


  constructor( private accountService: AccountService  ) { }

  ngOnInit(): void {
    this.accountService.getAllCards().subscribe(
      data => {
        this.cards = data;
      }
    )
    this.accountService.getOneCard("1").subscribe(
      data => {
        this.cardChosen = data;
      }
    )

  }

  onSwiper(event: Event){  }
  onSlideChange(){}
}
