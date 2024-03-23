import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'meuPrimeiroProjeto';
  resNomes: string[] = [];
  resIdade: number[] = [];
  resProfissao: string[] = [];

  resNomesFilho: string[] = [...this.resNomes];
  resIdadeFilho: number[] = [...this.resIdade];
  resProfissaoFilho: string[] = [...this.resProfissao];

  constructor(private dataService: DataService) {}

  private buscarData(): void {
    this.dataService.getData().subscribe((res: [string[], number[], string[]]) => {
      this.resNomes = res[0];
      this.resIdade = res[1];
      this.resProfissao = res[2];
    });
  }

  protected atualizarDataNoFilho(): void {
    const novosNomes = this.resNomesFilho = ['Alyasaf', 'João', 'Thaina'];
    const novasIdades = this.resIdadeFilho = [33, 18, 44];
    const novasProfissoes = this.resProfissaoFilho = ['Desevolvedor full-stack', 'Engenheiro', 'Advogada'];
    this.dataService.atualizarData(novosNomes, novasIdades, novasProfissoes);
  }

  eventChild(): void {
    this.atualizarDataNoFilho();
  }

  ngOnInit(): void {
      this.buscarData();
  }
}
