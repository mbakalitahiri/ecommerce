import { HomeComponent } from './store/home.component';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from './shared/shared.module';
import { ProductRepository } from './model/product.repository';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetaillComponent } from './store/cartDetail.component';
import { RouterModule, Routes } from '@angular/router';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';
import { ProductPageComponent } from './store/product-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const rutas: Routes = [
  { path: 'store', component: StoreComponent },
  {
    path: 'cart',
    component: CartDetaillComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    component: StoreComponent, // Wildcard route for a 404 page
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot(rutas),
    SharedModule,
    ModalModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [ProductRepository, BsModalRef, BsModalService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
