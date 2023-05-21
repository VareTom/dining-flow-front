import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, NavigationBarComponent],
})
export class HomePage {
  constructor() {}
}
