import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ValidatorService} from '../shared/validator.service';
import {User} from '../shared/interface';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import {InvalidFieldService} from '../shared/invalid-field.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private validatorService: ValidatorService,
    private auth: AuthService,
    private router: Router,
    public invalidFieldService: InvalidFieldService
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, this.validatorService.emailValidator()),
      password: new FormControl(null, this.validatorService.passwordValidator())
    });
  }

  submit(): void {
    if (this.form.invalid) {
      alert('Form is invalid!!!');
      return;
    }
    this.submitted = true;
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/selection']);
      this.submitted = false;
    });
  }
}
