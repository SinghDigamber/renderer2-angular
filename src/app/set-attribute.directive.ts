import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
   selector: '[setAttribute]'
})

export class AttributeDirective implements OnInit {

   constructor(
      private renderer: Renderer2,
      private elmRef: ElementRef
   ) { }

   ngOnInit() {
      this.renderer.setAttribute(this.elmRef.nativeElement, 'aria-hidden', 'true');
   }

}