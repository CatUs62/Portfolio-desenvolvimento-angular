import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncoesTypescriptComponent } from './funcoes-typescript.component';

describe('FuncoesTypescriptComponent', () => {
  let component: FuncoesTypescriptComponent;
  let fixture: ComponentFixture<FuncoesTypescriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncoesTypescriptComponent]
    });
    fixture = TestBed.createComponent(FuncoesTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
