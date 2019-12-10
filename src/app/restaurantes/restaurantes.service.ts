import { Injectable } from "@angular/core";
import { Restaurante } from "./restaurante/restaurante.model";
import { Http } from "@angular/http";
import { api } from "../app.api";
import { Observable } from "rxjs/Observable";
import { ErrorHandler } from "../app.error-handler";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { MenuItem } from "app/restaurante-detalhe/menu-item/menu-item.model";
@Injectable()
export class RestaurantesService {
  constructor(private http: Http) {}

  findAll(): Observable<Restaurante[]> {
    return this.http
      .get(`${api}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  findById(id: String): Observable<Restaurante> {
    return this.http
      .get(`${api}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  findReviews(id: String): Observable<any> {
    return this.http
      .get(`${api}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  findMenu(id: String): Observable<MenuItem[]> {
    return this.http
    .get(`${api}/restaurants/${id}/menu`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }
}
