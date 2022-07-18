import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { KontakteService } from '../kontakte.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('Username') nameKey!:ElementRef;
  constructor(public kontakt:KontakteService) { }

  ngOnInit(): void {
  }
  startQuiz(){}
  startLernmodus(){
    localStorage.setItem("Username",this.nameKey.nativeElement.value)
  }

}
