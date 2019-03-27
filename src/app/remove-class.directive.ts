import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
   selector: '[removeClass]'
})

export class removeDirective implements OnInit {

   constructor(
      private renderer: Renderer2,
      private elmRef: ElementRef
   ) { }

   ngOnInit() {
      this.renderer.removeClass(this.elmRef.nativeElement, 'crazyClass');
   }

}