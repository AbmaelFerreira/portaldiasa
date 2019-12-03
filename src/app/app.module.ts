import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { ResumoComponent } from './resumo/resumo.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { ConsultaAbertasHojeComponent } from './consulta/consulta-abertas-hoje/consulta-abertas-hoje.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
   
   
   
    BarraNavegacaoComponent,
   
    MenuLateralComponent,
   
    ResumoComponent,
   
    PainelSimplesComponent,
   
    ConsultaAbertasHojeComponent,
   
    ConsultaComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
