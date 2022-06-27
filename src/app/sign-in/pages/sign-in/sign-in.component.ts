import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatRadioChange } from "@angular/material/radio";
import { Router } from "@angular/router";
import { SignInService } from "../../services/sign-in.service";

interface user {
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  hide = true;
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  isTeacher: boolean = false;

  constructor(public builder: FormBuilder, public authService: SignInService, public router: Router) {
  }

  ngOnInit(): void {
    console.log('Bestial');
  }

  onSubmit() {
    const toSubmit: user = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password
    }
    this.authService.signIn(toSubmit).subscribe((response:any) => {
      localStorage.setItem('token', response.token);
      console.log(localStorage.getItem('token'));
    })
  }

  cancelSignIn() {
    console.log('Cancelled');
    this.router.navigate(['home']).then();
  }

  select($event: MatRadioChange) {
    this.isTeacher = $event.value === 'ROLE_TEACHER';
  }

}
