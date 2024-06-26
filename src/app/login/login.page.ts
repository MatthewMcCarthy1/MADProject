import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  username: string = 'Admin'; // Default username and password set to admin for now
  password: string = 'Admin'; //Will hopefully allow users to sign up and have their own account in future
  showError = false;

  constructor(private router: Router) {}

  login() {
    // Check if entered credentials match expected values.
    if (this.username === 'Admin' && this.password === 'Admin') {
      // Navigate to the home page
      this.router.navigate(['/home']);
    } else {
      // Show error message
      this.showError = true;
      //display error message animation long enough for user to read
      setTimeout(() => {
        this.showError = false;
      }, 3000);
    }
  }

}
