import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { RouterOutlet } from '@angular/router';
import { Store } from '../../../store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, NavigationBarComponent, RouterOutlet],
})
export class HomePage {
  constructor(private store: Store) {}

  ngOnInit() {
    console.log(this.store.value.connectedUser);
  }
}
