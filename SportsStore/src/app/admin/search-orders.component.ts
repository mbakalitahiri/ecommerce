import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {debounce, distinctUntilChanged, filter, map, switchMap, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {flatMap} from 'rxjs/internal/operators';
import {Order} from '../model/order.model';


@Component({
  selector: 'app-search-orders',
  templateUrl: './search-orders.component.html',
  styleUrls: ['./search-orders.component.css']
})
export class SearchOrdersComponent implements OnInit {

  queryField = new FormControl();

  baseUrl = 'http://localhost:3000/api/v1/';
  result:any
  total: any;



  constructor(private http: HttpClient) {}
  ngOnInit(): void {}


  onSearch() {
    return this.http.get(`${this.baseUrl}search/?fields=all&keyField=name&term=${this.queryField.value}`).subscribe(
      (res:any) => this.result = res.results,
      (res:any) => this.total = res.total)
  }

}
