import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: true,
  styleUrls: ['./button.component.scss'],
  imports: [CommonModule]
})
export class ButtonComponent  implements OnInit {

  @Input() buttonText!: string;
  @Input() small = false;
  @Input() disabled = false;

  constructor() { }

  ngOnInit() {}

  get classes() {
    return {
      'btn__small': this.small,
      'btn__disabled': this.disabled
    }
  }

}
