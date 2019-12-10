import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { RestauranteDetalheComponent } from "./restaurante-detalhe/restaurante-detalhe.component";
import { MenuComponent } from "./restaurante-detalhe/menu/menu.component";
import { AvaliacaoComponent } from "./restaurante-detalhe/avaliacao/avaliacao.component";
import { OrderComponent } from "./order/order.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "restaurantes", component: RestaurantesComponent },
  {
    path: "restaurantes/:id",
    component: RestauranteDetalheComponent,
    children: [
      { path: "", redirectTo: "menu", pathMatch: "full" },
      { path: "menu", component: MenuComponent },
      { path: "avaliacoes", component: AvaliacaoComponent }
    ]
  },
  { path: "order", component: OrderComponent }
];
