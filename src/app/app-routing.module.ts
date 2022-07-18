import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LinuxComponent } from './linux/linux.component'
import { LinuxLMComponent } from './fragen/linux-l-m/linux-l-m.component';
import { LinuxTPComponent } from './fragen/linux-t-p/linux-t-p.component';
import { LinuxVPComponent } from './fragen/linux-v-p/linux-v-p.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { MeldungComponent } from './meldung/meldung.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'linux' , component:LinuxComponent},
  {path:'linux-l-m',component:LinuxLMComponent},
  {path:'linux-t-p',component:LinuxTPComponent},
  {path:'linux-v-p',component:LinuxVPComponent},
  {path:'kont' ,component:KontaktComponent},
  {path:'meldung',component:MeldungComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
