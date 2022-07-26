import { Component, Input } from "@angular/core";

@Component({
    selector:'comp-3',
    templateUrl: './component3.component.html'
})

export class Component3{
    @Input() data: any;


    showAlert(){
        alert('comp3loaded')
    }
}