import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatRadioChange} from "@angular/material/radio";
import {SignUpService} from "../../services/sign-up.service";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide = true;
  registerForm = new FormGroup({
    fName: new FormControl('', [Validators.required]),
    lName: new FormControl('', [Validators.required, Validators.pattern(/\s/)]),
    age: new FormControl('', [Validators.required, Validators.pattern(/[0-9]*/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
    number: new FormControl('', [Validators.required, Validators.pattern(/[- +()0-9]+/)]),
  });
  showInput2: boolean = false;
  directors:Array<any> = []

  constructor(private signUpService: SignUpService) { }

  ngOnInit(): void {
    this.getAllDirectors()
  }

  showSelect($event: MatRadioChange) {
    this.showInput2 = $event.value == 'Teacher';
  }

  getAllDirectors() {
    return this.signUpService.getAllDirectors().subscribe((response:any) => {
      this.directors = response;
    })
  }
}
