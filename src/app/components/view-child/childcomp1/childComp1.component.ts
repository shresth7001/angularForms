import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Component({
    selector: 'app-childcomp1',
    templateUrl: './childComp1.component.html'
})

export class ChildComp1Component implements OnInit,AfterContentInit{
userName = 'Amit';
/** Content child is used to manipulate the projected content data */
@ContentChild('projectedChildData') projectedData! : ElementRef;

constructor(private renderer: Renderer2){

}

ngOnInit(){

    
}
ngAfterContentInit(): void {
    console.log(this.projectedData);
    this.renderer.setStyle(this.projectedData.nativeElement,'backgroundColor','pink')

}
    onBtnClick(){
        alert(this.userName);
        var text = this.renderer.createText('This is the updated text from content child ');
        this.renderer.appendChild(this.projectedData.nativeElement,text);
    }
}