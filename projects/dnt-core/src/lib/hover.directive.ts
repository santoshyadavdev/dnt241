import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dntHover]',
  exportAs: 'dntHover'
})
export class HoverDirective implements OnInit {

  @Input() color = 'blue';

  @Input() hoverColor = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(el.nativeElement);
  }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.color);
  }

  @HostListener('mouseover') onmousover() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.hoverColor);
  }

  @HostListener('mouseout') onmousleave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'white');
  }


}
