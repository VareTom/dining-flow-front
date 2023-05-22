import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    ButtonComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthPage implements OnInit {

  constructor(
    private router: Router,
    private navController: NavController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.authService.autoLogin().subscribe({
        next: () => this.navController.navigateForward('home', {animationDirection: 'forward'})
      });
    }
  }

  onRegister() {
    this.navController.navigateForward('auth/register', {animationDirection: 'forward'});
  }

  onLogin() {
    this.navController.navigateForward('auth/login', {animationDirection: 'forward'});
  }

}
