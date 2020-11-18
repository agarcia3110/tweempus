import { Component } from '@angular/core';

@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  frasePadre: string = "La frase del padre, pepito";

  saludo: string;

  holaPadre(event) {
    this.saludo = event;
    alert(this.saludo);
  }
}
