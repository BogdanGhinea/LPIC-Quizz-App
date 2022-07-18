import { Component, OnInit } from '@angular/core';
import { KontakteService } from '../kontakte.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  constructor(public kontakt: KontakteService) { }

  ngOnInit(): void {
 }
    sind(f:NgForm){
console.log(f);
    }
 

}
