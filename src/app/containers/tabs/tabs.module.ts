import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';



@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    IonicModule,
    TabsRoutingModule
  ]
})
export class TabsModule { }
