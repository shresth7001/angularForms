import {  AfterViewInit,  Component,  ElementRef,  OnInit,  Renderer2,  ViewChild} from '@angular/core';
import { RendererDirective } from '../../directives/rendereDirective';
import { ChildComp1Component } from './childcomp1/childComp1.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html'
})

/** With the help of view child we are able to access the dom methods and properties*/
export class ViewChildComponent implements AfterViewInit {
  @ViewChild('box') box!: ElementRef;
  @ViewChild(ChildComp1Component) child! : ChildComp1Component;
  @ViewChild(RendererDirective) myDir! : RendererDirective;

  userName = 'Rahul';
  constructor(private renderer: Renderer2) {}
  ngAfterViewInit() {
    // this.box.nativeElement.style.backgroundColor = 'blue';
    // this.box.nativeElement.classList = 'boxBlue';
    // console.log(this.child); 
    this.renderer.setStyle(this.box.nativeElement,'backgroundColor','green');
    this.renderer.setStyle(this.box.nativeElement,'color','yellow')
    this.renderer.addClass(this.box.nativeElement,'hello');
    this.renderer.setAttribute(this.box.nativeElement,'title','Hello World')
  }

  changeChildProperty() {
    this.child.userName = 'Alexa';
  }

  callChildMethod() {
    this.child.onBtnClick();
  }
  changeColor(color: string){
    this.myDir.changeBg(color);
  }
}
