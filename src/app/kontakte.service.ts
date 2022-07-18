import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KontakteService {
  name:string="";
  email: string="";
  message:string="";

  constructor() { }
}
