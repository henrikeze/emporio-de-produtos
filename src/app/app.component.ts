import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-dark bg-dark'>
      <a class='navbar-brand' style="color:#ff8c00;">{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' [routerLink]="['/products']">Lista de Produtos</a></li>
      </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Empório de Produtos';
}
