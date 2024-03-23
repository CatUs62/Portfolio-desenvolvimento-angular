import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataNomes: string[] = ['Jhon', 'Akita', 'Bill'];
  private dataIdades: number[] = [20, 22, 25];
  private dataProfissao: string[] = ['Desenvolvedor', 'QA', 'Analista de software'];

  constructor() { }

  public getData(): Observable<[string[], number[], string[]]> {
    return of([this.dataNomes, this.dataIdades, this.dataProfissao]);
  }

  public atualizarData(novosNomes: string[], novasIdades: number[], novasProfissoes: string[]): void {
    this.dataNomes = [];
    this.dataIdades = [];
    this.dataProfissao = [];

    this.dataNomes.push(...novosNomes);
    this.dataIdades.push(...novasIdades);
    this.dataProfissao.push(...novasProfissoes);
  }
}
