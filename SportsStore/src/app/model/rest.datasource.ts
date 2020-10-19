import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from './order.model';
import { Product } from './product.model';
import { Cart } from './cart.model';

const PROTOCOL = 'http';
const PORT = 3000;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://localhost:${PORT}/api/v1/`;
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  getOProductById(id: number): Observable<any> {
    return this.http.get<any>(
      this.baseUrl + `products/${id}`,
      this.getOptions()
    );
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }

  authenticate(user: string, pass: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers: headers,
    };
    const body = { username: user, password: pass };
    return this.http.post<any>(this.baseUrl + 'login', body, options).pipe(
      map((response: any) => {
        this.auth_token = response.success ? response.token : null;
        return response.success;
      })
    );
  }
  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      this.baseUrl + 'products',
      product,
      this.getOptions()
    );
  }
  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(
      `${this.baseUrl}products/${product.id}`,
      product,
      this.getOptions()
    );
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(
      `${this.baseUrl}products/${id}`,
      this.getOptions()
    );
  }
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'orders', this.getOptions());
  }

  getOrderById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + `orders/${id}`, this.getOptions());
  }

  deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(
      `${this.baseUrl}orders/${id}`,
      this.getOptions()
    );
  }
  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(
      `${this.baseUrl}orders/${order.id}`,
      order,
      this.getOptions()
    );
  }
  private getOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer<${this.auth_token}>`,
      }),
    };
  }
}
