import { Component } from '@angular/core';
import { Months, MonthsList } from '../enum/months.enum';

@Component({
  selector: 'app-estruturas-condicionais',
  templateUrl: './estruturas-condicionais.component.html',
  styleUrls: ['./estruturas-condicionais.component.css'],
})
export class EstruturasCondicionaisComponent {
  idade: number = 0;
  message: string = "Bem-vindo";
  mesSelecionado: string = Months.SELECIONE;
  mesesEnumValues = MonthsList;

  verificarIdade(): void {
    if (this.idade >= 18) {
      this.message = "Você é maior de idade";
    } else {
      this.message = "Você é menor de idade";
    }
  }

  verificarMes(): void {
    console.log(this.mesSelecionado)
    switch (this.mesSelecionado) {
      case Months.JANEIRO:
        this.message = "Janeiro selecionado";
        break;
      case Months.FEVEREIRO:
        this.message = "Fevereiro selecionado";
        break;
      case Months.MARCO:
        this.message = "Março selecionado";
        break;
      case Months.ABRIL:
        this.message = "Abril selecionado";
        break;
      case Months.MAIO:
        this.message = "Maio selecionado";
        break;
      case Months.JUNHO:
        this.message = "Junho selecionado";
        break;
      case Months.JULHO:
        this.message = "Julho selecionado";
        break;
      case Months.AGOSTO:
        this.message = "Agosto selecionado";
        break;
      case Months.SETEMBRO:
        this.message = "Setembro selecionado";
        break;
      case Months.OUTUBRO:
        this.message = "Outubro selecionado";
        break;
      case Months.NOVEMBRO:
        this.message = "Novembro selecionado";
        break;
      case Months.DEZEMBRO:
        this.message = "Dezembro selecionado";
        break;
      default:
        this.message = "Mês inválido";
        break;
    }
  }
}
