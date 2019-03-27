import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCrazy]'
})

export class CrazyDirective implements OnInit {

  constructor(
    private renderer: Renderer2, 
    private elmRef: ElementRef
  ) { }

  ngOnInit() {
    this.renderer.addClass(this.elmRef.nativeElement, 'crazyClass')
  }

}