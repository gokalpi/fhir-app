import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '../../../core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';
  passwordVisible = false;
  password?: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [true],
    });

    const defaultLoginPage = '';

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];

    // redirect to home if already logged in
    if (this.accountService.userValue) {
      this.router.navigate([
        this.getDefaultPage(this.accountService.userValue.role),
      ]);
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  submitForm(): void {
    for (const key in this.loginForm.controls) {
      this.loginForm.controls[key].markAsDirty();
      this.loginForm.controls[key].updateValueAndValidity();
    }

    this.submitted = true;

    // reset error
    this.error = '';

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.accountService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate([
            this.returnUrl || this.getDefaultPage(data.role),
          ]);
        },
        (error) => {
          this.error = error;
        }
      );
  }

  getDefaultPage(role: string): string {
    switch (role) {
      case 'Admin':
        return '/dashboard/admin';
        break;
      case 'Doctor':
        return '/dashboard/doctor';
        break;
      default:
        return '/';
        break;
    }
  }
}
