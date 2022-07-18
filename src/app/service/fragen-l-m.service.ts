import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Frage } from '../fragen';

@Injectable({
  providedIn: 'root'
})
export class FragenLMService {

constructor(private HttpClient:HttpClient) {
    
    
}


getall(){

  return this.HttpClient.get<any>('../assets/All.json');
}
getsc(){

  return this.HttpClient.get<any>('../assets/scfragen.json');
}

getmc(){

  return this.HttpClient.get<any>('../assets/mcfragen.json');
}
getfi(){

  return this.HttpClient.get<any>('../assets/fifragen.json');
}
}