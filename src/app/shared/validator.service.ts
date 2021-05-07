import {AbstractControl, ValidationErrors, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';

export class ValidatorService {
  emailValidator(): ((control: AbstractControl) => ValidationErrors)[] {
    return [
      Validators.email,
      Validators.required,
      MyValidators.allowedEmails,
      MyValidators.allowedDots,
      MyValidators.allowedLength
    ];
  }

  passwordValidator(): ((control: AbstractControl) => ValidationErrors)[] {
   return [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[$%.&!-])[A-Za-z\\d$%.&!-]{5,}$')
    ];
  }

  nameValidator(): ((control: AbstractControl) => ValidationErrors)[] {
    return [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('((^[a-z]+[A-Z])[a-z]*)+\\s([a-z][a-z]*)(-[a-z]+)')
    ];
  }
}
