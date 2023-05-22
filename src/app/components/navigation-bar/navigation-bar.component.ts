import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';

interface NavItem {
  link: string;
  isActive: boolean;
  iconName: string;
}

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  imports: [CommonModule, IonicModule]
})
export class NavigationBarComponent  implements OnInit {

  readonly navItems: NavItem[] = [
    {
      link: 'home',
      isActive: true,
      iconName: 'home'
    },
    {
      link: 'favorites',
      isActive: false,
      iconName: 'heart'
    },
    {
      link: 'restaurant-form',
      isActive: false,
      iconName: 'plus',
    },
    {
      link: 'family',
      isActive: false,
      iconName: 'users'
    },
    {
      link: 'profile',
      isActive: false,
      iconName: 'user'
    }
  ];

  constructor(private navController: NavController) { }

  ngOnInit() {}

  onClickNavItem(item: NavItem) {
    this.navItems.forEach(n => n.isActive = n.link === item.link);
    this.navController.navigateForward(item.link === 'home' ? 'home': 'home/'+item.link, {animationDirection: 'forward'});
  }

}
