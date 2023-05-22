import { Component, Renderer2 } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { Observable } from 'rxjs';
import { Store } from '../store';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    NavigationBarComponent
  ],
  providers: [
    Store
  ]
})
export class AppComponent {

  isNavigationBarDisplayed$!: Observable<boolean>;

  isDarkTheme = false;

  constructor(
    private renderer: Renderer2,
    private store: Store
  ) {}

  ngOnInit() {
    this.isNavigationBarDisplayed$ = this.store.select<boolean>('isNavigationBarDisplayed');
    // const isDarkTheme = JSON.parse(localStorage.getItem('color-theme')?? '');
    // this.isDarkTheme = !!isDarkTheme;
    this.onSetColorTheme(false);
  }

  onSetColorTheme(isDark: boolean) {
    this.renderer.setAttribute(document.body, 'color-theme', isDark ? 'dark': 'light');
  }

  onToggleColorTheme(event: any) {
    localStorage.setItem('color-theme', JSON.stringify(event.detail.checked));
    this.onSetColorTheme(event.detail.checked);
  }
}
