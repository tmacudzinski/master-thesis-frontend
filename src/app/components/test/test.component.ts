import { Component, OnInit } from '@angular/core';
import {Test} from '../../models/test';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  private test: Test;

  constructor(private apiService: ApiService) {
    apiService.getDrawnQuestions().subscribe(
      (drawnQuestions: Test) => {
        this.test = drawnQuestions;
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
