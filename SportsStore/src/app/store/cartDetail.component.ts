import { Cart } from './../model/cart.model';
import { Component } from '@angular/core';

@Component({
  selector: 'cart-detaills',
  templateUrl: './cartDetail.component.html',
})
export class CartDetaillComponent {

  constructor(public cart: Cart) {}
  status:string = 'bg-danger'
}
