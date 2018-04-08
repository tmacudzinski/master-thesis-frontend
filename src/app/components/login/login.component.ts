import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', []],
      password: ['', []]
    });
  }

  submitLogin() {
    this.apiService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(() => this.router.navigate(['/home']), error => console.log(error));
  }
}
