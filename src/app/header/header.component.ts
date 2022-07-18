import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module'
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { LinuxComponent } from '../linux/linux.component'
import { LinuxLMComponent } from '../fragen/linux-l-m/linux-l-m.component';
import { LinuxTPComponent } from '../fragen/linux-t-p/linux-t-p.component';
import { LinuxVPComponent } from '../fragen/linux-v-p/linux-v-p.component';
import { KontakteService } from '../kontakte.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public kontakt:KontakteService) { }

  ngOnInit(): void {
  }

}
