import { ProductRepository } from './../model/product.repository';
import { Component  } from '@angular/core';
import { Product } from '../model/product.model';


@Component({
  templateUrl: './productTable.component.html'
})

export class ProductTableComponent {
  public productsPerPage = 10;
  public selectedPage = 1;
  public selectedCategory = null;
  constructor(private repository: ProductRepository) { }
  getProducts(): Product[] {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts().slice(pageIndex, pageIndex + this.productsPerPage);
  }
  // tslint:disable-next-line:typedef
  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
   }

  // tslint:disable-next-line:typedef
  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  // tslint:disable-next-line:typedef
  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
  get pageCount(): any {
    return Math.ceil(
      this.repository.getProducts().length /
      this.productsPerPage
    );
  }
}
