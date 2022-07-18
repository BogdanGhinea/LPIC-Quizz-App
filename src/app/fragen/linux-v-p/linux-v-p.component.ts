import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FragenVPService } from 'src/app/service/fragen-v-p.service';
import { Frage, Antwort } from '../../fragen';
import { interval } from 'rxjs';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-linux-v-p',
  templateUrl: './linux-v-p.component.html',
  styleUrls: ['./linux-v-p.component.css']
})
export class LinuxVPComponent implements OnInit {





  constructor(private VP: FragenVPService) { }

  public name: string="";
  public questionList : any = [];
  public currentQuestion : number =0 ;
  public percent : number=0;
  counter :number=60;
  correctAns:number=0;
  incorrectAnswer:number=0;
  interval$:any;
  progress:string="0";
  s:string="0";
  isQuizCompleted : boolean = false;
  startmc : boolean = false;
  startsc: boolean = false;
  startfi: boolean = false;
  startal : boolean = false;
  result!: boolean;
  correctAnswer!: boolean;
  keyinput!:boolean;
  input:string ;
 routerlm: boolean = false;
  

  

  ngOnInit(): void {
    this.name= localStorage.getItem("Username")!;
    
    this.startCounter();
    
  }
  singelchoices(){
    this.getsc()
    this.startsc=true;
    this.startfi=false;
    this.startmc=false;
    this.currentQuestion = 0;
    this.resetQuiz()
    this.router()
    
  }
  muchoices(){
    this.getmc()
    this.startmc=true;
    this.startsc=false;
    this.startfi=false;
    this.currentQuestion =0;
    this.resetQuiz()
    this.router()
    
    
  }
  fichoices(){
    this.getfi()
    this.startfi=true;
    this.startsc=false;
    this.startmc=false;
    this.currentQuestion= 0;
    this.resetQuiz()
    this.router()
    
  }
  


  allchoices(){
    
    this.getall();
    this.startfi=false;
    this.startsc=false;
    this.startmc=false;
    this.startal=true;
    this.router()

   
   
  this.isQuizCompleted = false;
    
  
  this.currentQuestion = 0;
    this.resetQuiz()
  
  }


  getall(){
    this.VP.getall().subscribe(res=> {
      this.questionList = res.questions;
    })
  }
  getsc(){
    this.VP.getsc().subscribe(res=> {
      this.questionList = res.questions;
    })
  }
  getfi(){
    this.VP.getfi().subscribe(res=> {
      this.questionList = res.questions;
    })
  }
  getmc(){
    this.VP.getmc().subscribe(res=> {
      this.questionList = res.questions;
    })
  }
  nextQuestion(currentQno:number){
    
    if(currentQno <this.questionList.length) {
    this.currentQuestion++;
    this.percent+=this.questionList.length;
    this.resetCounter()
    } 
    else{
      this.isQuizCompleted = true;
      this.stopCounter();
      this.startsc=false;
    this.startmc=false;
    this.startfi=false;
    this.startal=false;
    
    }
      
    
  
  }
  previousQuestion(){
    this.currentQuestion--;
    this.percent-=100/this.questionList.length ;
  }
  scf(currentQno:number,option:any){
    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;
      this.startmc=false;
      this.startfi=false;
      this.startsc=false;
      this.stopCounter();
    }
    if(option.correct){
      this.correctAns++;
      this.percent+=100 /this.questionList.length ;
     setTimeout(()=>{
      this.currentQuestion++;
      this.resetCounter();
      this.getProgressPercent();
      },1000)
      
    }
    if(this.incorrectAnswer >=8){

      this.routerlm = true;
      this.startal=false;
      this.startfi=false;
      this.startsc=false;
      this.startmc=false;
    }
    else{
      setTimeout(()=>{
        this.currentQuestion++;
        this.incorrectAnswer++;
        this.percent+=100/this.questionList.length ;
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
    }
    if(option.correct){

      this.correctAns++;
      this.percent+=100/this.questionList.length ;
     setTimeout(()=>{
      // this.currentQuestion++;
      this.resetCounter();
      this.getProgressPercent();
      },1000)
      
    }
    if(this.incorrectAnswer >=8){

      this.routerlm = true;
      this.startal=false;
      this.startfi=false;
      this.startsc=false;
      this.startmc=false;
    }
    else{
      setTimeout(()=>{
        // this.currentQuestion++;
        this.incorrectAnswer++;
        this.percent+=100 /this.questionList.length ;
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
    
    this.isQuizCompleted = false;
    this.counter=60;
    this.currentQuestion=0;
    this.progress="0";
    this.percent = 0;
    this.routerlm = false;
    
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
        this.percent+=100/this.questionList.length;
        this.resetCounter();
        this.getProgressPercent();
      },2000)
    }
    else{
      
      this.isQuizCompleted = true;
      this.startal=false;
      this.stopCounter()
    }
  }
 
  

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
        this.next();
        if(this.incorrectAnswer >=8){

          this.routerlm = true;
          this.startal=false;
      this.startfi=false;
      this.startsc=false;
      this.startmc=false;
        }
      }
    } else {
      this.correctAnswer = false;
      this.keyinput = false;
      this.incorrectAnswer++;
      // this.isQuizCompleted = true;
      this.stopCounter();
      this.next();
    }


  }
  router(){

    if(this.incorrectAnswer >=8){
    

      this.routerlm = true;
      this.startal=false;

    }
    else {
      this.routerlm = false;
      
    }
  }
  a(){

  }
    
 
  
  }
