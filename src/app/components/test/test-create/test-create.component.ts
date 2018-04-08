import {Component, Input, OnInit} from '@angular/core';
import {Test} from '../../../models/test';
import {ApiService} from '../../../services/api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.scss']
})
export class TestCreateComponent implements OnInit {

  private testForm: FormGroup;

  constructor(private apiService: ApiService,  private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.testForm = this.fb.group({
      name: ['', [Validators.required]],
      duration: ['', []]
    });
  }

  submitTest() {
    const newTest = new Test();
    newTest.name = this.testForm.value.name;
    newTest.duration = this.testForm.value.duration;

    this.apiService.addTest(newTest).subscribe(
      (savedTest: Test) => {
        this.router.navigate(['/testDetails', savedTest.id]);
      },
      (error) => {
        /* blad dodawania testu */
        console.log(error);
      }
    );
  }

}
