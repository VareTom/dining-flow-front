import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('input') input!: ElementRef;

  @Input() formControl!: FormControl;
  @Input() label!: string;
  @Input() type!: string;

  get isFieldRequired(): boolean {
    return this.formControl.touched && this.formControl.invalid && this.formControl.getError('required');
  }

  constructor() { }

  ngOnInit() {}

  onFocus() {
    this.input.nativeElement.focus();
  }

}
