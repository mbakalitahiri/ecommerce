import { CounterAdminDirective } from './counteradmin.directive';
import { CounterDirective } from './../store/counter.directive';
import { CartDetaillsComponent } from './cart-detaills.component';
import { OrderTableComponent } from './orderTable.component';
import { ProductEditorComponent } from './productEditor.component';
import { ProductTableComponent } from './productTable.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.guard';

let routing = RouterModule.forChild([
  { path: '', component: AuthComponent },
  { path: 'main', component: AdminComponent, canActivate: [AuthGuard] },
  {
            path: "main", component: AdminComponent, canActivate: [AuthGuard],
            children: [
                { path: "products/:mode/:id", component: ProductEditorComponent },
                { path: "products/:mode", component: ProductEditorComponent },
                { path: "products", component: ProductTableComponent },
                { path: "orders", component: OrderTableComponent,
                        children: [{path:'detaills/:id', component: CartDetaillsComponent}]},
                { path: "**", redirectTo: "products" }
            ]
        },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  declarations: [AuthComponent, AdminComponent, ProductTableComponent, ProductEditorComponent, OrderTableComponent,CartDetaillsComponent, CounterAdminDirective
  ],
  exports: [],
  providers: [AuthGuard],
})
export class AdminModule {}
