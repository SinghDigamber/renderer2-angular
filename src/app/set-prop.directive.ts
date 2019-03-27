import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
   selector: '[setProp]'
})

export class setPropDirective implements OnInit {

   constructor(
      private renderer: Renderer2,
      private elmRef: ElementRef
   ) { }

   ngOnInit() {
      this.renderer.setProperty(this.elmRef.nativeElement, 'title', 'Hey there');
   }

}