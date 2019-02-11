import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.show') isOpen = false

  @HostListener('click') click(eventData: Event){
    this.isOpen = !this.isOpen
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

   }

}
