import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { routes } from "./app.routes";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { RestauranteComponent } from "./restaurantes/restaurante/restaurante.component";
import { RestaurantesService } from "./restaurantes/restaurantes.service";
import { RestauranteDetalheComponent } from "./restaurante-detalhe/restaurante-detalhe.component";
import { MenuComponent } from "./restaurante-detalhe/menu/menu.component";
import { ShoppingCartComponent } from "./restaurante-detalhe/shopping-cart/shopping-cart.component";
import { MenuItemComponent } from "./restaurante-detalhe/menu-item/menu-item.component";
import { AvaliacaoComponent } from "./restaurante-detalhe/avaliacao/avaliacao.component";
import { ShoppingCartService } from "./restaurante-detalhe/shopping-cart/shopping-cart-service";
import { OrderComponent } from "./order/order.component";
import { InputComponent } from './shared/input/input.component';
import {RadioComponent } from './shared/radio/radio.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { OrderService } from "./order/order.service";
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestauranteComponent,
    RestauranteDetalheComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    AvaliacaoComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    OrderSumaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    RestaurantesService,
    ShoppingCartService,
    OrderService,
    { provide: LOCALE_ID, useValue: "pt-BR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
