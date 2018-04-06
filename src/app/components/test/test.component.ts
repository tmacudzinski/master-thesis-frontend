import {Component, Input, OnInit} from '@angular/core';
import {Test} from '../../models/test';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() test: Test;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
  }

}
