import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[rendererDirective]'
})

export class RendererDirective{
constructor(private el: ElementRef, private renderer: Renderer2){
this.renderer.setStyle(this.el.nativeElement,'backgroundColor','blue')
}

changeBg(color: string){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor',color);
}
}