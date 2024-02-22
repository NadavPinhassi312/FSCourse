import { Directive, HostBinding, HostListener, Renderer2, ElementRef } from '@angular/core';
@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    constructor(private renderer: Renderer2, private elRef: ElementRef) {}

    @HostBinding('class.open') isOpen=false;
    @HostBinding('style.backgroundColor') backgroundColor: string;

    @HostListener('click') toggleOpen(eventData:Event){
        this.isOpen=!this.isOpen;
    }


}