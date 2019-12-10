import { ShoppingCartService } from "app/restaurante-detalhe/shopping-cart/shopping-cart-service";
import { Injectable } from "@angular/core";
import { CartItem } from "app/restaurante-detalhe/shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from "@angular/http";
import { api } from "../app.api";
import "rxjs/operator/map";
@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService, private http: Http) {}

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  checkOrder(order: Order): Observable<Order> {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post(
        `${api}/orders`,
        JSON.stringify(order),
        new RequestOptions({ headers: headers })
      )
      .map(response => response.json());
  }

  clear() {
    this.cartService.clear();
  }
}
