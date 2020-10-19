import { Observable } from 'rxjs';
import { Component, OnInit,     Input } from '@angular/core';
import { Order } from '../model/order.model';
import { OrderRepository } from '../model/order.repository';
import { repeat } from 'rxjs/operators';

@Component({
  templateUrl: './orderTable.component.html',
  styleUrls: ['./orderTable.component.css']
})
export class OrderTableComponent implements OnInit {
  includeShipped = true;
  orders:any = [];

  constructor(private repository: OrderRepository) {}
  getOrders(): Order[] {
      return this.repository
      .getOrders()
      .filter((o) => this.includeShipped );
  }
  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }
  delete(id: number) {
    this.repository.deleteOrder(id);
   }

  ngOnInit() {
    this.repository.loadOrders();
    this.repository.getOrders().length
  }

  public currentCompany;

  public selectCompany(event: any, item: any) {

    this.currentCompany = item.id;
  }
}
