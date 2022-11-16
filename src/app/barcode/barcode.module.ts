import { NgModule } from '@angular/core';
import { NgxBarcodeModule } from '@greatcloak/ngx-barcode';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { BarcodeRoutingModule } from './barcode-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListComponent,
    CreateComponent
  ],
  imports: [
    SharedModule,
    NgxBarcodeModule,
    BarcodeRoutingModule
  ]
})
export class BarcodeModule { }
