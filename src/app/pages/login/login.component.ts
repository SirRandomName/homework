import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'src/app/core/auth/auth.service';
import {CostumePasswordValidators} from './password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private _fb: FormBuilder, private _authService: AuthService) {
    const emailValidatorPattern = new RegExp(
      "^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$"
    );
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
    this._authService.logIn(this.loginForm);
  }
}
