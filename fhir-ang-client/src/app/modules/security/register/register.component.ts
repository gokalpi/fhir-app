import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from 'src/app/core/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  passwordVisible = false;
  confirmPasswordVisible = false;
  password?: string;
  confirmPassword?: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {
    // redirect to home if already logged in
    if (this.accountService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      phoneNumberPrefix: ['+90'],
      phoneNumber: [null, [Validators.required]],
      agree: [false],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  submitForm(): void {
    for (const key in this.registerForm.controls) {
      this.registerForm.controls[key].markAsDirty();
      this.registerForm.controls[key].updateValueAndValidity();
    }

    this.submitted = true;

    // reset error
    this.error = '';

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.accountService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['/security/login']);
        },
        (error) => {
          this.error = error.error.message;
        }
      );
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.f.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.f.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
