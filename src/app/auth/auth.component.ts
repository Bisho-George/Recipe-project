import { Component, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent {
  @ViewChild('authForm') authForm: FormGroup;
  isLoading = false;
  isLoginMode = true;
  error: string = null;
  constructor (private authService: AuthService, private router: Router) {}
  onSwitchMode () {
    this.isLoginMode = !this.isLoginMode
  }
  onSubmit () {
    if (!this.authForm.valid) {
      return;
    }
    const email = this.authForm.value.email;
    const password = this.authForm.value.password;
    let authObservable: Observable<AuthResponseData>;
    this.isLoading = true;
    if (this.isLoginMode) {
      authObservable = this.authService.login(email, password)
    }
    else {
      authObservable = this.authService.signup(email, password)
    }
    authObservable.subscribe(
      responseData => {
        console.log(responseData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage
        this.isLoading = false;

      }
    )
    this.authForm.reset();
  }

}
