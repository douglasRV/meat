import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from 'app/restaurantes/restaurantes.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private restauranteService: RestaurantesService, private route: ActivatedRoute) { }


  menu: Observable<MenuItem[]>

  ngOnInit() {

    this.menu = this.restauranteService.findMenu(this.route.parent.snapshot.params['id'])

  }

  addMenuItem(item: MenuItem) {
  }

}
