import { Component } from '@angular/core';
export class Pizza {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>{{pizza.name}}</h2>
    <div><label>id: </label>{{pizza.id}}</div>
    <div><label>name: </label>{{pizza.name}}</div>
    <div><label>price: </label>{{pizza.price}}</div>
  `,
})
export class AppComponent {
  title = 'Mon site';
  name = '4 fromages';
  pizza: Pizza = {
    id: 1,
    name: 'Reine',
    price: 12.99
  }
}