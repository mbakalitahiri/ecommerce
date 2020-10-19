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

  public productsPerPage = 4;
  public selectedPage = 1;
  public selectedCategory = null;


  constructor(private repository: OrderRepository) {}
  // getOrders(): Order[] {
  //     return this.repository
  //     .getOrders()
  //     .filter((o) => this.includeShipped );
  // }

  getOrders(): Order[]{

    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
     return this.repository.getOrders().slice(pageIndex, pageIndex + this.productsPerPage);
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

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
  get pageCount(): any {
     return Math.ceil(
      this.repository.getOrders().length /
        this.productsPerPage
    );
  }
}
