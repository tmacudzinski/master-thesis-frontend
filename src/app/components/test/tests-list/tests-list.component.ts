import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Test} from '../../../models/test';

@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.scss']
})
export class TestsListComponent implements OnInit {

  private tests: Test[];

  constructor(private apiService: ApiService) {
    apiService.getTests().subscribe(
      (tests: Test[]) => {
        this.tests = tests;
      },
      (error) => {
        /* blad pobierania testu */
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
