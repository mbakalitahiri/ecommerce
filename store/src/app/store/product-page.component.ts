import { BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Cart } from './../model/cart.model';
import { ProductRepository } from './../model/product.repository';
import { Observable, pipe } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-prduct-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  public id: number;
  public product: Product;

  constructor(
    private ar: ActivatedRoute,
    private pr: ProductRepository,
    public cart: Cart,
    private alertService: AlertModalService,
    private modalService: BsModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
     this.ar.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'));
      this.pr.getProduct(this.id).subscribe((data)=>{
       this.product = data[0]
      })
    });
  }
  addProductToCart(product: Product, quantity) {

   if(quantity > 0) {
    this.cart.addLine(product, quantity);
    this.showSussesfullMessage(
    'success',
    'Product has been added to your cart'
  );
   }

  }

  showSussesfullMessage(btclass, message) {
    this.alertService.handleEvent(btclass, message);
  }


  goToCheckOut(){
    if(this.cart.itemCount > 0){
      this.router.navigate(["/checkout"])
    }

  }
}
