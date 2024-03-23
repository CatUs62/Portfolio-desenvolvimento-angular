import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstruturasCondicionaisComponent } from './components/estruturas-condicionais/estruturas-condicionais.component';
import { FormsModule } from '@angular/forms';
import { EstruturasRepeticaoComponent } from './components/estruturas-repeticao/estruturas-repeticao.component';
import { FuncoesTypescriptComponent } from './components/funcoes-typescript/funcoes-typescript.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    EstruturasCondicionaisComponent,
    EstruturasRepeticaoComponent,
    FuncoesTypescriptComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
