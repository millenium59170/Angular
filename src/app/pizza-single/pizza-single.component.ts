import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../services/pizza.service';
import { Pizza } from '../models/pizza';

@Component({
  selector: 'app-pizza-single',
  templateUrl: './pizza-single.component.html',
  styleUrls: ['./pizza-single.component.scss']
})
export class PizzaSingleComponent implements OnInit {
  pizza: Pizza;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService
  ) { }

  ngOnInit() {
    let id = this.route.params._value.id;
    this.pizzaService.getPizza(+id).then(pizza => {
      this.pizza = pizza;
    });
  }

}
