import { Component, OnInit } from "@angular/core";
import { RestaurantesService } from "app/restaurantes/restaurantes.service";
import { Restaurante } from "app/restaurantes/restaurante/restaurante.model";
import { ActivatedRoute } from "@angular/router";
import { routerNgProbeToken } from "@angular/router/src/router_module";

@Component({
  selector: "mt-restaurante-detalhe",
  templateUrl: "./restaurante-detalhe.component.html",
  styleUrls: ["./restaurante-detalhe.component.css"]
})
export class RestauranteDetalheComponent implements OnInit {
  constructor(
    private restauranteService: RestaurantesService,
    private route: ActivatedRoute
  ) {}

  restaurante: Restaurante;

  ngOnInit() {
    this.restauranteService
      .findById(this.route.snapshot.params["id"])
      .subscribe(restaurante => (this.restaurante = restaurante));
  }
}
