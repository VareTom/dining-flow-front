import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';
import { FormControl, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../components/button/button.component';
import { InputComponent } from '../../../components/input/input.component';
import { BackButtonComponent } from '../../../components/back-button/back-button.component';
import { AuthService } from '../../../../shared/services/auth.service';
import { Store } from '../../../../store';

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
  ],
  providers: [
    Store
  ]
})
export class LoginPage implements OnInit {

  emailFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);

  get isFormValid(): boolean {
    return this.emailFormControl.valid && this.passwordFormControl.valid;
  }

  constructor(
    private navController: NavController,
    private readonly authService: AuthService,
    private store: Store
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navController.back({animationDirection: 'back'});
  }

  onLogin() {
    if (this.isFormValid && this.emailFormControl.value && this.passwordFormControl.value) {
      this.authService.login(this.emailFormControl.value, this.passwordFormControl.value).subscribe({
        next: () => {
          this.navController.navigateForward('home', {animationDirection: 'forward'});
          console.log(this.store.value.connectedUser)
        }
      })
    }
  }

  onRegister() {
    this.navController.navigateForward('auth/register', {animationDirection: 'forward'});
  }
}
