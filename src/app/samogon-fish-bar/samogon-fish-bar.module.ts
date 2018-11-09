import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SamogonFishBarPage } from './samogon-fish-bar.page';

const routes: Routes = [
  {
    path: '',
    component: SamogonFishBarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SamogonFishBarPage]
})
export class SamogonFishBarPageModule {}
