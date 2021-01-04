import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'src/app/core/auth/auth.service';
import {SnackBarService} from 'src/app/core/snack-bar/snack-bar.service';
import {LoginControl} from './login.model';
import {CostumePasswordValidators} from './password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  LoginControl = LoginControl;

  constructor(private _fb: FormBuilder, private _authService: AuthService, private _snackService: SnackBarService) {
    const emailValidatorPattern = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    this.loginForm = this._fb.group({
      username: ['', [Validators.required, Validators.pattern(emailValidatorPattern)]],
      password: [
        '',
        [
          Validators.required,
          CostumePasswordValidators.legnthValidator,
          CostumePasswordValidators.numberValidator,
          CostumePasswordValidators.lowercaseValidator,
          CostumePasswordValidators.uppercaseValidator
        ]
      ]
    });
  }

  onSubmit() {
    this._authService.logIn(this.loginForm).then(
      () => {},
      (error: string) => {
        this._snackService.openErrorSnackBar(error);
        this.loginForm.controls[LoginControl.PASSWORD].setValue('');
      }
    );
  }
}
