import { Component, OnInit } from "@angular/core";
import { RestaurantesService } from "app/restaurantes/restaurantes.service";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "mt-avaliacao",
  templateUrl: "./avaliacao.component.html",
  styleUrls: ["./avaliacao.component.css"]
})
export class AvaliacaoComponent implements OnInit {
  constructor(
    private restauranteService: RestaurantesService,
    private route: ActivatedRoute
  ) {}

  reviews: Observable<any>;

  ngOnInit() {
    this.reviews = this.restauranteService.findReviews(
      this.route.parent.snapshot.params["id"]
    );
  }
}
