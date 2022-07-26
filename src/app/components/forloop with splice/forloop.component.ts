import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.scss'],
})


export class ForloopPracticeComponent implements OnInit {
  users : userArrType[] = [];

  ngOnInit(): void {}
  onCreateUser(uname: any) {
    this.users.push({
      name: uname.value,
    });
  }


  onRemoveUser(){
    this.users.splice(this.users.length-1);
  }

  onRemoveItem(val : any){
    this.users.splice(val,1);
  }



}




export interface userArrType{
  name: string;
}
