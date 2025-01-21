import { Injectable } from '@angular/core';
import { ILoginResult } from '../models/login-result.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  authenticate(username: string, password: string): Promise<ILoginResult> {
    return new Promise((resolve) => {
      // Simulate an API call or business logic
      const validUsername = 'admin@example.com';
      const validPassword = 'password';

      if (username === validUsername && password === validPassword) {
        resolve({ loginSuccessful: true });
      } else {
        resolve({ loginSuccessful: false });
      }
    });
  }
}
