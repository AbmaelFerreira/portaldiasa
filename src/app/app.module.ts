import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { ResumoComponent } from './resumo/resumo.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';


@NgModule({
  declarations: [
    AppComponent,
   
   
   
    BarraNavegacaoComponent,
   
    MenuLateralComponent,
   
    ResumoComponent,
   
    PainelSimplesComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
