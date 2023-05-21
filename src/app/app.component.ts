import { Component, Renderer2 } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ],
})
export class AppComponent {

  isDarkTheme = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
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
