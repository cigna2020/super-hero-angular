import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {User} from '../../shared/interface';
import {ValidatorService} from '../../shared/validator.service';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private validatorService: ValidatorService,
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, this.validatorService.emailValidator()),
      password: new FormControl(null, this.validatorService.passwordValidator()),
      name: new FormControl(null, this.validatorService.nameValidator())
    });
  }

  createUser(): void {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    localStorage.setItem('userName', this.form.value.name);
    localStorage.setItem('userEmail', this.form.value.email);

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/']);
      this.submitted = false;
    });
  }
}
