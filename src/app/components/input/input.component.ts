import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class InputComponent  implements OnInit {

  @Input() formControl!: FormControl;
  @Input() label!: string;
  @Input() type!: string;

  constructor() { }

  ngOnInit() {}

}
