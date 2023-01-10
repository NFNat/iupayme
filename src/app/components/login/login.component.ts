import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logForm: FormGroup;

  btnDisable = true;

  constructor( public fb: FormBuilder) {

    this.logForm = this.fb.group({
      dni: ['', [Validators.required ]],
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }




  saveData(){
    console.log(this.logForm.value);
  }
}
