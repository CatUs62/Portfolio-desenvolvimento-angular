import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estruturas-repeticao',
  templateUrl: './estruturas-repeticao.component.html',
  styleUrls: ['./estruturas-repeticao.component.css']
})
export class EstruturasRepeticaoComponent implements OnInit {
  dataAniversario: string[] = ['20', '05', '2003'];
  dataFormatadaAndConcatenados: string = '';

  concatenarNumeros(): void {
    for (let i = 0; i < this.dataAniversario.length; i++) {
      this.dataFormatadaAndConcatenados += this.dataAniversario[i];

      if (i === 0) {
        this.dataFormatadaAndConcatenados += '/';
      } else if (i === 1) {
        this.dataFormatadaAndConcatenados += '/';
      }
    }
  }

  removerDaLista(): void {
    let list = document.querySelector('#list');

    while(list?.firstChild) {
      list.removeChild(list.firstChild);
    }
  }

  ngOnInit(): void {
    this.concatenarNumeros();
  }
}
