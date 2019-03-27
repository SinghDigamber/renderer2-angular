import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
   selector: '[setStyle]'
})

export class setStyleDirective implements OnInit {

   constructor(
      private renderer: Renderer2,
      private elmRef: ElementRef
   ) { }

   ngOnInit() {
      this.renderer.setStyle(
         this.elmRef.nativeElement,
         'background',
         'pink'
      );
   }

}