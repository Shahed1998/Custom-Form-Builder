import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loginForm!: FormGroup;
  loginBtnPressed: boolean = false;

  constructor(private titleService: TitleService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.titleService.setTitle('Login');
    this.loginFormBuilder();
  }

  loginFormBuilder() {
    this.loginForm = this.fb.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required],
        rememberMe: [false],
      },
      {
        validators: [this.emailValidatorFn],
      }
    );
  }

  // Custom validation
  emailValidatorFn(control: AbstractControl) {
    var regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(control.get('email')!.value)
      ? null
      : { invalidEmail: true };
  }

  // -----------------------------------------------------------
  // Gets
  // -----------------------------------------------------------

  get Email() {
    return this.loginForm.get('email') as FormControl;
  }

  get Password() {
    return this.loginForm.get('password') as FormControl;
  }

  // -----------------------------------------------------------
  // Form submit and reset
  // -----------------------------------------------------------
  login() {
    this.loginBtnPressed = true;
    console.log(this.loginForm);
  }
}
