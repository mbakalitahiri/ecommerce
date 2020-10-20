import { RestDataSource } from './rest.datasource';
import { Cart } from './cart.model';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import {ConnectionService} from './connection.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  exports: [],
  providers: [
    ProductRepository,
    Cart,
    Order,
    OrderRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
    RestDataSource,
    AuthService,
    ConnectionService
  ],
})
export class ModelModule {}
