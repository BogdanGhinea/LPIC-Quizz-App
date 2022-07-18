import { Directive, ElementRef,Input,Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  @Input() isCorrect : Boolean=false;
  
  constructor(private el: ElementRef,private render : Renderer2) { }
  @HostListener('click') answer() {
    if(this.isCorrect){
      this.render.setStyle(this.el.nativeElement,'background','#8fbc8f');
      this.render.setStyle(this.el.nativeElement,'color','white');
      this.render.setStyle(this.el.nativeElement,'border','3px solid grey');
    }else{
      this.render.setStyle(this.el.nativeElement,'background','#ff5050');
      this.render.setStyle(this.el.nativeElement,'color','white');
      this.render.setStyle(this.el.nativeElement,'border','3px solid grey');
     
      
    }
  }
  




}
