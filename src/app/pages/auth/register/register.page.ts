import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { InputComponent } from '../../../components/input/input.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { BackButtonComponent } from '../../../components/back-button/back-button.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    InputComponent,
    ButtonComponent,
    BackButtonComponent
  ]
})
export class RegisterPage implements OnInit {

  emailFormControl = new FormControl(null, [Validators.required]);
  passwordFormControl = new FormControl(null, [Validators.required]);
  unsernameFormControl = new FormControl(null, [Validators.required]);

  get isFormValid(): boolean {
    return this.emailFormControl.valid && this.passwordFormControl.valid;
  }

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  onBack() {
    this.navController.back({animationDirection: 'back'});
  }

  onRegister() {
    if (this.isFormValid) this.navController.navigateForward('home', {animationDirection: 'forward'});
  }
}
