import { Directive, ElementRef, HostBinding, HostListener, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen (event: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {

  }

}
