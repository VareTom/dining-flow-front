import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';
import { FormControl, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../components/button/button.component';
import { InputComponent } from '../../../components/input/input.component';
import { BackButtonComponent } from '../../../components/back-button/back-button.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    InputComponent,
    IonicModule,
    BackButtonComponent,
  ]
})
export class LoginPage implements OnInit {

  emailFormControl = new FormControl(null, [Validators.required]);
  passwordFormControl = new FormControl(null, [Validators.required]);

  get isFormValid(): boolean {
    return this.emailFormControl.valid && this.passwordFormControl.valid;
  }

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navController.back({animationDirection: 'back'});
  }

  onLogin() {
    if (this.isFormValid) this.navController.navigateForward('home', {animationDirection: 'forward'});
  }

  onRegister() {
    this.navController.navigateForward('auth/register', {animationDirection: 'forward'});
  }
}
