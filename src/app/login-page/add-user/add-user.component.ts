import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {User} from '../../shared/interface';
import {ValidatorService} from '../../shared/validator.service';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private validatorService: ValidatorService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, this.validatorService.emailValidator()),
      password: new FormControl(null, this.validatorService.passwordValidator()),
      name: new FormControl(null, this.validatorService.nameValidator())
    });
  }

//   static getUserName() {
//     return this.form.value.text;
// }

  createUser(): void {
    console.log(this.form);
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
      this.router.navigate(['/']);
      this.submitted = false;
    });
  }
}
