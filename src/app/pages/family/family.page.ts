import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-family',
  templateUrl: './family.page.html',
  styleUrls: ['./family.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FamilyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
