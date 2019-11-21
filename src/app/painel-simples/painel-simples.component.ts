import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-painel-simples',
  templateUrl: './painel-simples.component.html',
  styleUrls: ['./painel-simples.component.css']
})
export class PainelSimplesComponent implements OnInit {

  @Input () titulo = "Consultas marcadas Últimos 30 dias";
  @Input () col = 10;
  @Input () tipo = "info";
  @Input () qtd_OS ;
  @Input () situacao;
  
  



  constructor() { }

  ngOnInit() {
  }

}
