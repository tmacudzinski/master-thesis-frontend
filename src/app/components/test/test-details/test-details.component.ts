import { Component, OnInit } from '@angular/core';
import {Test} from '../../../models/test';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.scss']
})
export class TestDetailsComponent implements OnInit {

  private test: Test;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.params
      .subscribe(params => this.apiService.getTestById(params['id'])
        .subscribe(response => { this.test = response; }, error => console.log(error)));
  }

  ngOnInit() {
  }

}
