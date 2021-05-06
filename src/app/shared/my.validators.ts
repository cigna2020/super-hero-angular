import {FormControl} from '@angular/forms';

export class MyValidators {
  static allowedEmails(control: FormControl): { [key: string]: boolean } {
    let result = {};
    let mark = false;
    const allowedDomains = ['.com', '.net', '.org', '.co', '.us'];
    allowedDomains.forEach((domn) => {
      if (control.value !== null && (control.value).endsWith(domn)) {
        result = null;
        mark = true;
      } else {
        result = {notAllowedEmails: true};
      }
    });
    return mark === false ? result : null;
  }

  static allowedLength(control: FormControl): { [key: string]: boolean } {

    const controlValue = control.value;
    if (controlValue !== null && controlValue.includes('@')) {
      const address = controlValue.slice(controlValue.indexOf('@') + 1, controlValue.length);
      if (address !== null && address.length > 5) {
        return {notAllowedLength: true};
      } else {
        return null;
      }
    }
  }

  static allowedDots(control: FormControl): { [key: string]: boolean } {
    const controlValue = control.value;
    if (controlValue !== null && controlValue.includes('@')) {
      const address = controlValue.slice(0, controlValue.indexOf('@'));
      const dots = address.match(/[.]/g);
      if (dots !== null && dots.length > 3) {
        return {notAllowedDots: true};
      } else {
        return null;
      }
    }
  }
}
