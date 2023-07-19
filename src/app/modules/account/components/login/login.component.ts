import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { IUser } from 'src/app/models/users/user';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  returnUrl!: string;
  loading = false;
  submitted = false;
  errorMessage: string | undefined;
  user: IUser = {} as IUser;
  constructor(private accountService: AccountService,private router: Router) {
    this.user = {
      email: '',
      password: '',
      token: ''
    }
  }

  ngOnInit(): void {
    //this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/shop';
    this.createLoginForm();

  }
  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      password: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    this.submitted = true;
    this.accountService.login(this.loginForm.value);
  }
}
