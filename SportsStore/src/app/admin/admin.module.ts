import {CounterAdminDirective} from './counteradmin.directive';
import {CartDetaillsComponent} from './cart-detaills.component';
import {OrderTableComponent} from './orderTable.component';
import {ProductEditorComponent} from './productEditor.component';
import {ProductTableComponent} from './productTable.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AuthComponent} from './auth.component';
import {AuthGuard} from './auth.guard';
import { SearchOrdersComponent } from './search-orders.component';

const routing = RouterModule.forChild([
  {path: '', component: AuthComponent},
  {path: 'main', component: AdminComponent, canActivate: [AuthGuard]},
  {
    path: 'main', component: AdminComponent, canActivate: [AuthGuard],
    children: [
      {path: 'products/:mode/:id', component: ProductEditorComponent},
      {path: 'products/:mode', component: ProductEditorComponent},
      {path: 'products', component: ProductTableComponent},
      {path: 'orders', component: OrderTableComponent,
        children: [
          { path: 'detaills/:id', component: CartDetaillsComponent }
          ]
      },
      {path: 'search', component: SearchOrdersComponent},
      {path: '**', redirectTo: 'products'}
    ]
  },
  {path: '**', redirectTo: 'auth'}
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing, ReactiveFormsModule],
  declarations: [AuthComponent, AdminComponent, ProductTableComponent, ProductEditorComponent, OrderTableComponent, CartDetaillsComponent, CounterAdminDirective, SearchOrdersComponent
  ],
  exports: [],
  providers: [AuthGuard],
})
export class AdminModule {
}
