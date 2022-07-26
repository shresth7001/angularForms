import { Component, OnInit, ViewChild } from '@angular/core';
import { PlaceHolder } from '../../directives/placeHolder.directive';
import { Component1 } from './component1/component1.component';
import { Component2 } from './component2/component2.component';
import { Component3 } from './component3/component3.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
})

export class DynamicComponentComponent implements OnInit {
  constructor() {}
  dummyComponent = Component2;
  @ViewChild(PlaceHolder) dynComp! : PlaceHolder;
  ngOnInit(): void {}

  assignComponent(component: string) {
    if (component === 'comp1') this.dummyComponent = Component1;
    else this.dummyComponent = Component2;
  }

  createDynamicCompThroughFactory() {
    // const componentFact = this.componentFactoryResolver.resolveComponentFactory(Component3);
    const viewContainerRef = this.dynComp?.viewContainerRef;
    viewContainerRef?.clear();
    const componentRef = viewContainerRef?.createComponent(Component3);
    if (componentRef != undefined) {
      componentRef.instance.data =
        'Hello Your component is dynamically created';
      componentRef.instance.showAlert();
    }
  }
}
