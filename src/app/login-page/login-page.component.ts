import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from '../shared/my.validators';
import {ValidatorService} from '../shared/validator.service';
import {UserInterface} from '../shared/user.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;

  constructor(private validatorService: ValidatorService) { }

  ngOnInit(): void {
    this.form = new FormGroup( {
      email: new FormControl(null, this.validatorService.emailValidator()),
      password: new FormControl(null, this.validatorService.passwordValidator())
    });
  }

  submit(): void {
    console.log(this.form.value);
    if (this.form.invalid) {
      console.log('Form is invalid!!!');
      return;
    }
    const user: UserInterface = {
      email: this.form.value.email,
      password: this.form.value.password
    };
  }
}
