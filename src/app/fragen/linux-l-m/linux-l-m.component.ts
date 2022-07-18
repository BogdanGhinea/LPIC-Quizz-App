import { Component, OnInit } from '@angular/core';
import { Frage } from '../../fragen';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FragenLMService } from 'src/app/service/fragen-l-m.service';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';


@Component({
  selector: 'app-linux-l-m',
  templateUrl: './linux-l-m.component.html',
  styleUrls: ['./linux-l-m.component.css']
})
export class LinuxLMComponent implements OnInit {
  public name: string="";
  public questionList : any = [];
  public currentQuestion : number =0 ;
  public points : number=0;
  public percent : number=0;
  counter :number=60;
  correctAnswer:number=0;
  incorrectAnswer:number=0;
  interval$:any;
  progress:string="0";
  isQuizCompleted : boolean = false;
  start : boolean = false;

  constructor(private LM : FragenLMService) { }

  ngOnInit(): void {
    this.name= localStorage.getItem("Username")!;
    
    this.startCounter();
  }
  singelchoices(){
    this.getsc();
    this.start=true;
    this.resetQuiz();

  }
  muchoices(){
    this.getmc();
    this.start=true;
    this.resetQuiz();
  }
  fichoices(){
    this.getfi();
    this.start=true;
    this.resetQuiz();
  }
  allchoices(){
    this.getall();
    this.start=true;
    this.resetQuiz();
  }

  getall(){
    this.LM.getall().subscribe(res=> {
      this.questionList = res.questions;
    })
  }
  getsc(){
    this.LM.getsc().subscribe(res=> {
      this.questionList = res.questions;
    })
  }
  getfi(){
    this.LM.getfi().subscribe(res=> {
      this.questionList = res.questions;
    })
  }
  getmc(){
    this.LM.getmc().subscribe(res=> {
      this.questionList = res.questions;
    })
  }



  nextQuestion(currentQno:number){
    if(currentQno ===this.questionList.length){
      this.isQuizCompleted = true;
      this.stopCounter();
      this.start=false;
      this.percent+=100 /this.questionList.length;
   
    }
    else{
    this.currentQuestion++;
    this.percent+=100 /this.questionList.length;
    this.resetCounter()
    this.getProgressPercent()
    }
  }
  previousQuestion(){
    this.currentQuestion--;
    this.percent-=100 /this.questionList.length;
    this.resetCounter();
  }
  answer(currentQno:number,option:any){
    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;
      this.start=false;
      this.stopCounter();
    }
    if(option.correct){
      this.points+=10;
      this.correctAnswer++;
      this.percent+=100 /this.questionList.length;
     setTimeout(()=>{
      this.currentQuestion++;
      this.resetCounter();
      this.getProgressPercent();
      },1000)
      
    }else{
      setTimeout(()=>{
        this.currentQuestion++;
        this.incorrectAnswer++;
        this.percent+=100 /this.questionList.length;
        this.resetCounter();
        this.getProgressPercent();
        },1000)
        
        this.points-=10;
     
    }
  }
  startCounter(){
    this.interval$ = interval(1000).subscribe(val=>{
      this.counter--;
      if(this.counter===0){
        this.currentQuestion++;
        this.counter=60;
        this.points-=10;
        this.percent+=100 /this.questionList.length;
      }
    });
    setTimeout(()=>{
      this.interval$.unsubscribe()
    },600000)
  }
  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;
  }
  resetCounter(){
    this.stopCounter();
    this.counter=60;
    this.startCounter();
  }
  resetQuiz(){
    this.resetCounter();
  
    this.points=0;
    this.counter=60;
    this.currentQuestion=0;
    this.progress="0";
    this.percent = 0;
    this.isQuizCompleted =false;
    
  }
  getProgressPercent(){
    this.progress=((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }
  Weiter(){
    


  }
  
  }