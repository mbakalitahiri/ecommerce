import { ProductPageComponent } from './product-page.component';
import { CheckoutComponent } from './checkout.component';
import { CartDetaillComponent } from './cartDetail.component';
import { CartSummaryComponent } from './cartSummary.component';
import { StoreComponent } from './store.component';
import { NgModule } from '@angular/core';
import { Router, Route, RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  { path: 'store/:id', component: ProductPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule],
})
export class StoreRoutingmodule {}
