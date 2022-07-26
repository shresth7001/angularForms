import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { ForloopPracticeComponent } from './components/forloop with splice/forloop.component';
import { FormComponent } from './components/form/form.component';
import { ForLoopComponent } from './components/ng-for/ngfor.component';
import { SwitchCaseComponent } from './components/switch-case/switchCase.component';
import { ViewChildComponent } from './components/view-child/view-child.component';

const routes: Routes = [
  {path:'forms', component: FormComponent},
  {path:'switchCase', component: SwitchCaseComponent},
  {path: 'forLoop', component: ForLoopComponent},
  {path: 'forPrac', component: ForloopPracticeComponent},
  {path: 'dynamicComponent', component: DynamicComponentComponent},
  {path: 'viewChild', component:ViewChildComponent}
];

@NgModule({
  imports: [ CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
