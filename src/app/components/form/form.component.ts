import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

interface FruitInterface {
  name: string;
  checked: boolean;
}
const RADIO_LIST_FROM_DATABASE = [
  { name: '🍏', checked: false },
  { name: '🍋', checked: false },
  { name: '🍓', checked: true },
  { name: '🍌', checked: false },
  { name: '🍉', checked: false },
  { name: '🥝', checked: false },
];

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})

export class FormComponent implements OnInit {
  City: any = ['Florida', 'South Dakota', 'Tennessee']
  name: string = 'Angular';
  result: any;
  fruitsArr: FruitInterface[] = [];
  form = new FormGroup({
    user_gender: new FormControl(null, Validators.required),
    fruits: new FormArray([]),
    cityName: new FormControl(null,Validators.required)
  });
  ngOnInit(): void {
    this.fruitsArr = RADIO_LIST_FROM_DATABASE;
    const formArray = this.form.controls['fruits'] as FormArray;
    this.fruitsArr.forEach((fruit) => {
      formArray.push(
        new FormGroup({
          name: new FormControl(fruit.name),
          checked: new FormControl(fruit.checked),
        })
      );
    });

  }

  submitForm(): void {
    const { value } = this.form;
    value.fruits = value.fruits?.filter((f: FruitInterface) => f.checked);
    this.result = value;
  }

  get fruitsData() {
    return this.form.get('fruits') as FormArray;
  }



  // onDropDownChange(){
  //   this.form.get('user_gender')?.enable();
  //       this.form.get('fruits')?.enable();
  //  const value = this.form.get('cityName')?.value;

  //   if(value === "Tennessee"){
  //     this.form.get('user_gender')?.disable();
  //   }
  //   else if(value === "Florida")
  //   this.form.get('fruits')?.disable();
  // }

  @HostListener('change') changeDropdown(){
    this.form.get('user_gender')?.enable();
        this.form.get('fruits')?.enable();
   const value = this.form.get('cityName')?.value;

    if(value === "Tennessee"){
      this.form.get('user_gender')?.disable();
    }
    else if(value === "Florida")
    this.form.get('fruits')?.disable();
  }
}
