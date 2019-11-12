import { Component, OnInit, Input, OnChanges,SimpleChanges } from '@angular/core';

import {qst} from 'src/app/model/questionconst';
import { Question } from '../model';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnChanges {

  @Input()
  data:Question;

  constructor() { }

  ngOnInit() {
    
  }

  get(v)
  {
    
    console.log(v);
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

}
