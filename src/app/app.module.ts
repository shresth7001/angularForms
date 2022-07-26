import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ForLoopComponent } from './components/ng-for/ngfor.component';
import { SwitchCaseComponent } from './components/switch-case/switchCase.component';
import { ForloopPracticeComponent } from './components/forloop with splice/forloop.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { Component2 } from './components/dynamic-component/component2/component2.component';
import { Component1 } from './components/dynamic-component/component1/component1.component';
import { Component3 } from './components/dynamic-component/component3/component3.component';
import { PlaceHolder } from './directives/placeHolder.directive';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { ChildComp1Component } from './components/view-child/childcomp1/childComp1.component';
import { RendererDirective } from './directives/rendereDirective';

@NgModule({
  declarations: [
    AppComponent,
    SwitchCaseComponent,
    FormComponent,
    ForLoopComponent,
    ForloopPracticeComponent,
    DynamicComponentComponent,
    Component1,
    Component2,
    Component3,
    PlaceHolder,
    ViewChildComponent,
    ChildComp1Component,
    RendererDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
