import { ConnectionService } from './../model/connection.service';
import { Cart } from './../model/cart.model';
import { Component } from '@angular/core';

@Component({
  selector: 'cart-detaills',
  templateUrl: './cartDetail.component.html',
})
export class CartDetaillComponent {
  public connected: boolean = true;

  constructor(public cart: Cart, private connection: ConnectionService) {
    this.connected = this.connection.connected;
    connection.Changes.subscribe((state) => (this.connected = state));
  }
  status: string = 'bg-danger';
}
