import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
   selector: '[createContent]'
})

export class ContentDirective implements OnInit {

   constructor(
      private renderer: Renderer2,
      private elmRef: ElementRef
   ) { }

   ngOnInit() {
      const p = this.renderer.createElement('p');
      const text = this.renderer.createText('I am dynamically created');

      this.renderer.appendChild(p, text);
      this.renderer.appendChild(this.elmRef.nativeElement, p);
   }

}