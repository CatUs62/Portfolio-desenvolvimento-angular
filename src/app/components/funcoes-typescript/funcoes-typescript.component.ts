import { Component } from '@angular/core';

@Component({
  selector: 'app-funcoes-typescript',
  templateUrl: './funcoes-typescript.component.html',
  styleUrls: ['./funcoes-typescript.component.css']
})
export class FuncoesTypescriptComponent {
  primeiroNumero!: number;
  segundoNumero!: number;
  resultado!: number;

  public calcular(primeiroNumero: number, segundoNumero: number): number {
    return this.resultado = primeiroNumero + segundoNumero;
  }
}
