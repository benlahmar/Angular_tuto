import { Component, OnInit,OnChanges,SimpleChanges } from '@angular/core';
import { personne } from 'src/app/quiz/personne';
import { mydata } from 'src/app/mydata/data';
import { Quiz } from '../model/quiz';
import { qst } from '../model/questionconst';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  

   quiz:Quiz;
   step=0;

  constructor() { }

  goTo(n)
  {  
    this.step=n;  
  }
  
  ngOnInit() {
    this.quiz=new Quiz(qst);
    
    console.log(this.quiz);
  }
  

}
