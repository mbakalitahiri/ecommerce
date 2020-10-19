import { NgForm } from '@angular/forms';
import { ProductRepository } from './../model/product.repository';
 import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { Component,  OnInit } from '@angular/core';


@Component({
  templateUrl:'./productEditor.component.html'
})

export class ProductEditorComponent  implements OnInit {
  editing: boolean = false;
    product: Product = new Product();
    constructor(private repository: ProductRepository,
                private router: Router,
                private activeRoute: ActivatedRoute) {
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            Object.assign(this.product,  repository.getProduct(activeRoute.snapshot.params["id"]));
console.log(this.product)
        }
    }
    save(form: NgForm) {
        this.repository.saveProduct(this.product);
console.log(this.product)
        this.router.navigateByUrl("/admin/main/products");
    }


ngOnInit(){
  this.product = this.repository.getProduct(this.activeRoute.snapshot.params["id"]).subscribe((p)=>this.product = p[0])
  console.log(this.product)
}
}
