import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null; // Property to store error message

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin() {
    this.errorMessage = null; // Reset error message on each login attempt

    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill in all required fields correctly.';
      return;
    }

    const email = this.loginForm.value.email ?? '';
    const password = this.loginForm.value.password ?? '';

    this.loginService.authenticate(email, password).then((result) => {
      if (result.loginSuccessful) {
        this.router.navigate(['/home']); // Navigate to /home
      } else {
        this.errorMessage = 'Invalid login credentials.';
      }
    });
  }
}
