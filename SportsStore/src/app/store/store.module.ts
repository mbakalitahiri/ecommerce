import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { CartDetaillComponent } from './cartDetail.component';
import { CartSummaryComponent } from './cartSummary.component';
import { CheckoutComponent } from './checkout.component';
import { CounterDirective } from './counter.directive';
import { ProductPageComponent } from './product-page.component';
import { StoreComponent } from './store.component';
import { StoreRoutingmodule } from './store.routing.module';

@NgModule({
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent,
    CartDetaillComponent,
    CheckoutComponent,
    ProductPageComponent,

  ],
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    StoreRoutingmodule,
    FormsModule,
  ],
  exports: [StoreComponent, CartDetaillComponent, CheckoutComponent],
})
export class StoreModule {}
