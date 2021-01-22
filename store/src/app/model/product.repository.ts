import { Injectable } from '@angular/core';
import { Product } from './product.model';
// import { StaticDataSource } from './static.datasource';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];
  constructor(private dataSource: RestDataSource) {
    dataSource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }
  getProducts(category: string = null): Product[] {
    return this.products.filter(
      (p) => category == null || category == p.category
    );
  }
  getProduct(id: number): any {
    return this.dataSource.getOProductById(id)
  }
  getCategories(): string[] {
    return this.categories;
  }
  saveProduct(product: Product) {
    console.log(product)
    if (product.id == null || product.id == 0) {
      this.dataSource
        .saveProduct(product)
        .subscribe((p) => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product).subscribe((p) => {
        this.products.splice(
          this.products.findIndex((p) => p.id == product.id),
          1,
          product
        );
      });
    }
  }
  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe((p) => {
      this.products.splice(
        this.products.findIndex((p) => p.id == id),
        1
      );
    });
  }

  handleError() {
    alert('something terrible happened');
  }
}
