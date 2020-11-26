import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../models';

@Component({
  selector: 'app-question-summary',
  templateUrl: './question-summary.component.html',
  styleUrls: ['./question-summary.component.css']
})
export class QuestionSummaryComponent implements OnInit {
  @Input() question: Question;

  constructor() {
  }

  ngOnInit(): void {
  }

}
