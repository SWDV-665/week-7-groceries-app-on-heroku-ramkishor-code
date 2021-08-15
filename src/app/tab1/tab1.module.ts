import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { GroceriesServiceProvider } from '../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../providers/input-dialog-service/input-dialog-service';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  
    
  ],
  declarations: [Tab1Page,],
  exports: [
    
],
providers:[GroceriesServiceProvider,
  InputDialogServiceProvider]

})
export class Tab1PageModule {}
