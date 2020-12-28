import {AbstractControl} from '@angular/forms';

export class CostumePasswordValidators {
  public static uppercaseValidator(control: AbstractControl): false | {[key: string]: boolean} {
    const regexp = new RegExp('[A-Z]');
    const isValid = regexp.test(control.value);
    return isValid ? false : {uppercaseValidator: true};
  }

  public static lowercaseValidator(control: AbstractControl): false | {[key: string]: boolean} {
    const regexp = new RegExp('[a-z]');
    const isValid = regexp.test(control.value);
    return isValid ? false : {lowercaseValidator: true};
  }

  public static numberValidator(control: AbstractControl): false | {[key: string]: boolean} {
    const regexp = new RegExp('[0-9]');
    const isValid = regexp.test(control.value);
    return isValid ? false : {numberValidator: true};
  }

  public static legnthValidator(control: AbstractControl): false | {[key: string]: boolean} {
    const isValid = control.value.length >= 6;
    return isValid ? false : {legnthValidator: true};
  }
}
