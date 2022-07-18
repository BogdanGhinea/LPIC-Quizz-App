import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SidNavComponent } from './sid-nav/sid-nav.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeaderComponent } from './header/header.component';
import { LinuxComponent } from './linux/linux.component';
import { LinuxVPComponent } from './fragen/linux-v-p/linux-v-p.component';
import { LinuxTPComponent } from './fragen/linux-t-p/linux-t-p.component';
import { LinuxLMComponent } from './fragen/linux-l-m/linux-l-m.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FormsModule } from '@angular/forms';
import { MeldungComponent } from './meldung/meldung.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SidNavComponent,
    DashbordComponent,
    HeaderComponent,
    LinuxComponent,
    LinuxVPComponent,
    LinuxTPComponent,
    LinuxLMComponent,
  
    KontaktComponent,
    MeldungComponent,
    ChangeBgDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
