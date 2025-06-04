import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { InputContainerComponent } from '../input-container/input-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputValidationComponent } from '../input-validation/input-validation.component'; 

@Component({
  selector: 'text-input',
  standalone: true,
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  imports:[
    InputContainerComponent,
    ReactiveFormsModule,
    InputValidationComponent
  ],
})
export class TextInputComponent implements OnInit {
@Input()
control!:AbstractControl;
@Input()
showErrorsWhen:boolean = true;
@Input()
label!: string;
@Input()
type: 'text' | 'password' | 'email' = 'text';

get formControl(){
  return this.control as FormControl;
}
  constructor() { }

  ngOnInit(): void {
  }

}
