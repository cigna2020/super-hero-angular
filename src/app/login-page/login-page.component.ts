import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup( {
      email: new FormControl(null, [
        Validators.email,
        Validators.required,
        MyValidators.allowedEmails,
        MyValidators.allowedDots,
        MyValidators.allowedLength
      ]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  submit(): void {
    console.log(this.form.value);
  }
}
