import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StudentLoginDetails} from '../../models/student-login-details';
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
      studentIndex: ['', []],
      studentFirstname: ['', []],
      studentLastname: ['', []],
      testName: ['', []],
      testPassword: ['', []]
    });
  }

  submitLogin() {
    const studentLoginDetails: StudentLoginDetails = new StudentLoginDetails(
      this.loginForm.value.studentIndex,
      this.loginForm.value.studentFirstname, this.loginForm.value.studentLastname,
      this.loginForm.value.testName, this.loginForm.value.testPassword);

    try {
      this.apiService.loginStudent(studentLoginDetails);
      /* udane logowanie */
      this.router.navigate(['/test']);
    } catch (e) {
      /* blad uwierzytelniania */
      console.log(e);
    }
  }
}
