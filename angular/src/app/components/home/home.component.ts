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

  constructor(private titleService: TitleService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.titleService.setTitle('Login');
    this.loginFormBuilder();
  }

  loginFormBuilder() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false],
    });
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
}
