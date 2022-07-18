import { Component, OnInit } from '@angular/core';
import { DoBootstrap } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { LinuxComponent } from '../linux/linux.component'
import { LinuxLMComponent } from '../fragen/linux-l-m/linux-l-m.component';
import { LinuxTPComponent } from '../fragen/linux-t-p/linux-t-p.component';
import { LinuxVPComponent } from '../fragen/linux-v-p/linux-v-p.component';

@Component({
  selector: 'app-sid-nav',
  templateUrl: './sid-nav.component.html',
  styleUrls: ['./sid-nav.component.css']
})
export class SidNavComponent implements OnInit {

  det = "block"
  constructor() { }

  ngOnInit(): void {
  

}



}
