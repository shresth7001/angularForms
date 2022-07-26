import { Component } from "@angular/core";

@Component({
    selector: 'app-switch-case',
    templateUrl: './switchCase.component.html'
})

export class SwitchCaseComponent {
    selectedValue = '' ;
    constructor(){

    }

    getSelectedVal(val: any){
        this.selectedValue = val.value;
    }
}