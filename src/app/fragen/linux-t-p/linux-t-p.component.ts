import { Component, OnInit } from '@angular/core';
import { FragenTPService } from 'src/app/service/fragen-t-p.service';
import { Frage, Antwort } from '../../fragen';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';




@Component({
  selector: 'app-linux-t-p',
  templateUrl: './linux-t-p.component.html',
  styleUrls: ['./linux-t-p.component.css']
})
export class LinuxTPComponent implements OnInit {

  public name: string="";
  public questionList : any[] ;
  frage : any;
  public currentQuestion : number =0 ;
  public percent : number=0;
  counter :number=60;
  correctAns:number=0;
  incorrectAnswer:number=0;
  interval$:any;
  progress:string="0";
  isQuizCompleted : boolean = false;
  startmc : boolean = false;
  startsc: boolean = false;
  startfi: boolean = false;
  startal : boolean = false;
  result!: boolean;
  correctAnswer!: boolean;
  keyinput!:boolean;
  input:string ;
  enablealert:boolean;
  enablealertCorrect:boolean;
  


  constructor(private TP : FragenTPService) { }

  ngOnInit(): void {
    this.name= localStorage.getItem("Username")!;
    this.keyinput= false;
    
    this.startCounter();
  }
  singelchoices(){
    this.getsc()
    this.startsc=true;
    this.startfi=false;
    this.startmc=false;
    this.startal=false;
    this.currentQuestion = 0;
    this.resetQuiz()
    this.isQuizCompleted = false;
    
  }
  muchoices(){
    this.getmc()
    this.startmc=true;
    this.startsc=false;
    this.startfi=false;
    this.startal=false;
    this.currentQuestion = 0;
    this.resetQuiz()
    this.isQuizCompleted = false;
    
    
  }
  fichoices(){
    this.getfi()
    this.startfi=true;
    this.startsc=false;
    this.startmc=false;
    this.startal=false;
    this.currentQuestion = 0;
    this.resetQuiz()
    this.isQuizCompleted = false;
    
  }
  allchoices(){
    
    this.getall();
    this.startfi=false;
    this.startsc=false;
    this.startmc=false;
    this.startal=true;

   
   
  this.isQuizCompleted = false;
    
  
  this.currentQuestion = 0;
    this.resetQuiz()
  
  }
  






  
  getall(){
    this.TP.getall().subscribe(res=> {
      this.questionList = res.questions;
    })
  }
  getsc(){
    this.TP.getsc().subscribe(res=> {
      this.questionList = res.questions;
    })
  }
  getfi(){
    this.TP.getfi().subscribe(res=> {
      this.questionList = res.questions;
    })
  }
  getmc(){
    this.TP.getmc().subscribe(res=> {
      this.questionList = res.questions;
    })
  }
  nextQuestion(currentQno:number){
    
    if(currentQno <this.questionList.length) {
    this.currentQuestion++;
    this.percent+=100 /this.questionList.length;;
    this.resetCounter()
    } 
    else{
      this.isQuizCompleted = true;
      this.stopCounter();
      this.startsc=false;
    this.startmc=false;
    this.startfi=false;
    
    }
      
    this.getProgressPercent()
  
  }
  previousQuestion(){
    this.currentQuestion--;
    this.percent-=12.5;
  }
  scf(currentQno:number,option:any){
    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;
      this.startmc=false;
      this.startfi=false;
      this.startsc=false;
      this.stopCounter();
      this.enablealert=false;
      this.enablealertCorrect=false;
    }
    if(option.correct){
      this.enablealertCorrect=true;
      this.enablealert=false;
      this.correctAns++;
      this.percent+=100 /this.questionList.length;;
     setTimeout(()=>{
      
      this.resetCounter();
      this.getProgressPercent();
      },1000)
      
    }else{
      this.enablealert=true;
      this.enablealertCorrect=false;
      setTimeout(()=>{
        
        this.incorrectAnswer++;
        this.percent+=100 /this.questionList.length;;
        this.resetCounter();
        this.getProgressPercent();
        },1000)
        
        
     
    }
  }

  mcf(currentQno:number,option:any){
    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;
      this.startmc=false;
      this.startfi=false;
      this.startsc=false;
      this.stopCounter();
      this.enablealert=false;
      this.enablealertCorrect=false;
     
    }
    if(option.correct){
      this.enablealertCorrect=true;
      this.enablealert=false;
      this.correctAns++;
      this.percent+=100 /this.questionList.length;;
      setTimeout(()=>{
      // this.currentQuestion++;
      this.resetCounter();
      this.getProgressPercent();
      },1000)
      
    }else{
      this.enablealert=true;
      this.enablealertCorrect=false;
      setTimeout(()=>{
        // this.currentQuestion++;
       
        this.incorrectAnswer++;
        this.percent+=100 /this.questionList.length;;
        this.resetCounter();
        this.getProgressPercent();
        },1000)
        
       
     
    }
  }
  startCounter(){
    this.interval$ = interval(1000).subscribe(val=>{
      this.counter--;
      if(this.counter===0){
        this.currentQuestion++;
        this.counter=60;
        
        this.percent+=12.5;
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
    
    
    this.counter=60;
    this.currentQuestion=0;
    this.progress="0";
    this.percent = 0;
    
  }
  getProgressPercent(){
    this.progress=((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }
  
  next() {
    

    if (this.currentQuestion < this.questionList.length) {
      this.currentQuestion++;
      this.correctAnswer = false;
      this.keyinput = false;
      this.input="";
      setTimeout(()=>{
        this.percent+=100/ this.questionList.length;
        this.resetCounter();
        this.getProgressPercent();
      },2000)
    }
    else{
      
      this.isQuizCompleted = true;
      this.stopCounter()
    }
  }
  xCloseFalsch(){
    this.enablealert=!this.enablealert;
   
  }
  xCloseKorrrekt(){
    this.enablealertCorrect=!this.enablealertCorrect;
  }
  newnext(){
    this.currentQuestion = -1;
    this.next();
    this.percent-=100/ this.questionList.length;}

  compareAnswer(value: string) {
   console.log(this.questionList[this.currentQuestion].options[0].text)
    if (value.length > 0) {
      this.keyinput = true;
      if (this.questionList[this.currentQuestion].options[0].text == value) {
        this.correctAnswer = true;
        this.input = value;
        
        this.correctAns++;
        setTimeout(()=>{
        this.next();
      },2500)
        
      }
      else {
        this.correctAnswer = false;
        this.input = value;
        this.incorrectAnswer++;
        
        
        
        
      }
    } else {
      this.correctAnswer = false;
      this.keyinput = false;
      this.incorrectAnswer++;
      this.newnext()
      this.stopCounter()
      
      
    }


  }

 
    
  
  }

  
  