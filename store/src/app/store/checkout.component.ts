import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../model/order.model';
import { OrderRepository } from '../model/order.repository';
import { Cart } from './../model/cart.model';
@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  orderSent: boolean = false;
  submitted: boolean = false;
  public lines: number;
  constructor(
    public repository: OrderRepository,
    public order: Order,
    public cart: Cart
  ) {}
  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
       this.repository.saveOrder(this.order).subscribe((order) => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }

  ngOnInit() {
    this.lines = this.cart.lines.length;
   }
}
