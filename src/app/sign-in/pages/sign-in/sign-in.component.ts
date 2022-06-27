import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SignInService} from "../../services/sign-in.service";
import {MatRadioChange} from "@angular/material/radio";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  hide = true;
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
  });
  constructor(public builder: FormBuilder, public authService: SignInService, public router: Router) {
  }

  ngOnInit(): void {
  }

  get email() { return this.signInForm.controls['email'];}

  get password() { return this.signInForm.controls['password'];}

  signIn() {
    this.authService.signIn(this.signInForm.value).subscribe((response: any) => {
      this.authService.setToken(JSON.stringify(response.accessToken));
      this.authService.setCurrentUser(JSON.stringify(response.user));
      this.signInForm.reset();
      console.log(`accessToken: ${this.authService.getToken()}`);
      this.router.navigate(['home']).then();
    })
  }

  cancelSignIn() {
    console.log('Cancelled');
    this.router.navigate(['home']).then();
  }

  select($event: MatRadioChange) {
    //this.showInput2 = $event.value == 'Teacher';
  }

}
