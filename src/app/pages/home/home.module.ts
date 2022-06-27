import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { PickupCallCardComponent} from '../../components/pickup-call-card/pickup-call-card.component'
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,

  ],
  declarations: [HomePage, PickupCallCardComponent] // to take a component
})
export class HomePageModule {}
