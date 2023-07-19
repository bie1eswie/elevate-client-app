import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDTO } from 'src/app/models/registration/registration';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  errors!: string[];
  loading = false;
  submitted = false;
  errorMessage : string | undefined
  registration: RegisterDTO = {} as RegisterDTO;

  constructor(private formBuilder: FormBuilder,
              private accountService: AccountService,
              private router: Router) {
    this.registration = this.createRegistration()
  }

  ngOnInit(): void {
    this.createRegisterForm()
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required,
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]
      ],
      password: [null, [Validators.required]],
      displayName: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.accountService.register(this.registration);
  }
  createRegistration(): RegisterDTO{
    const registration: RegisterDTO = {
     displayName:'',
     password: '',
     email: ''
    }
    return registration;
  }
}
