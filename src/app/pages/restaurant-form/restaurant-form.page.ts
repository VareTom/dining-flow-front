import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.page.html',
  styleUrls: ['./restaurant-form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RestaurantFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
