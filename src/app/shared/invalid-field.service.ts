export class InvalidFieldService {

  invalidNameMessage = '';
  invalidEmailMessage = '';
  invalidPasswordMessage = '';

  showInvalidNameMessage(form): string {
    if (!form.get('name').value) {
      this.invalidNameMessage = 'Field name is required!';
      return '!form.get("name").value';
    } else if (form.get('name').errors.pattern) {
      this.invalidNameMessage = 'Name should contain two words: camelCase + Space + kebab-case';
      return 'form.get("name").errors.pattern';
    } else if (form.get('name').errors.minlength) {
      this.invalidNameMessage = 'Name should contain at least 8 characters!';
      return 'form.get("name").errors.minlength';
    }
  }

  showInvalidEmailMessage(form): string {
    if (!form.get('email').value) {
      this.invalidEmailMessage = 'Email is required!';
      return '!form.get("email").value';
    } else if (form.get('email').errors.notAllowedEmails) {
      this.invalidEmailMessage = 'Supports only .com, .net, .org, .co, .us domains!';
      return 'form.get("email").errors.notAllowedEmails';
    } else if (form.get('email').errors.notAllowedDots) {
      this.invalidEmailMessage = 'Allowed only 3 dots!';
      return 'form.get("email").errors.notAllowedDots';
    } else if (form.get('email').errors.notAllowedLength) {
      this.invalidEmailMessage = 'Allowed only 5 characters after @;';
      return 'form.get("email").errors.notAllowedLength';
    }
  }


  showInvalidPasswordMessage(form): string {
    if (!form.get('password').value) {
      this.invalidPasswordMessage = 'Password is required!';
      return '!form.get("password").value';
    } else if (form.get('password').errors.minlength) {
      this.invalidPasswordMessage = 'Password should be at least 5 characters length!';
      return 'form.get("password").errors.minlength';
    } else if (form.get('password').errors.pattern) {
      this.invalidPasswordMessage = 'Password should contain: at least one uppercase letter, one number, one special symbol. $ % . & ! -.';
      return 'form.get("password").errors.pattern';
    }
  }

  isTouchedField(form, fieldName): boolean {
    const field = form.get(fieldName);
    return field.touched && field.invalid;
  }
}



