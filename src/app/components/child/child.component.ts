import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() resNomes: string[] = [];
  @Input() resIdade: number[] = [];
  @Input() resProfissao: string[] = [];
  @Output() eventData: EventEmitter<void> = new EventEmitter<void>();

  constructor(private dataService: DataService) { }

  OnEventClick(): void {
    this.eventData.emit();
  }

  private buscarData(): void {
    this.dataService.getData().subscribe((res: [string[], number[], string[]]) => {
      this.resNomes = res[0];
      this.resIdade = res[1];
      this.resProfissao = res[2];
    });
  }

  ngOnInit(): void {
    this.buscarData();
  }
}
