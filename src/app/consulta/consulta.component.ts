import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  consultas = {
    "abertas":
      [
        {
          "un": "001",
          "dt_os": "10/11/2019",
          "terceiro": "609822/1",
          "dt_cigam": "10/11/2019",
          "sit_item": "iniciada",
          "tipo_os": "p",
          "solicitante": "GERALDO",
          "tecnico": "Anildo",
          "dias": "1",
          "reclamado": "Não estamos conseguindo localizar o arquivo",
          "dt_acomp": "12/01/2019",
          "ult_acomp": "26/11/2019"


        },
        {
          "un": "009",
          "dt_os": "10/08/2019",
          "terceiro": "609112/1",
          "dt_cigam": "10/11/2019",
          "sit_item": "iniciada",
          "tipo_os": "p",
          "solicitante": "GERALDO",
          "tecnico": "Abmael",
          "dias": "1",
          "reclamado": "Não estamos conseguindo localizar o arquivo",
          "dt_acomp": "12/01/2019",
          "ult_acomp": "26/11/2019"


        }
      ],
    "fechadas":
      [
        {
          "un": "002",
          "dt_os": "10/11/2019",
          "terceiro": "609822/1",
          "dt_cigam": "10/11/2019",
          "sit_item": "Fechada",
          "tipo_os": "p",
          "solicitante": "GERALDO",
          "tecnico": "Anildo",
          "dias": "1",
          "reclamado": "Não estamos conseguindo localizar o arquivo",
          "dt_acomp": "12/01/2019",
          "ult_acomp": "26/11/2019"
        },
        {
          "un": "002",
          "dt_os": "10/11/2019",
          "terceiro": "609822/1",
          "dt_cigam": "10/11/2019",
          "sit_item": "Fechada",
          "tipo_os": "p",
          "solicitante": "GERALDO",
          "tecnico": "Anildo",
          "dias": "1",
          "reclamado": "Não estamos conseguindo localizar o arquivo",
          "dt_acomp": "12/01/2019",
          "ult_acomp": "26/11/2019"
        }
      ]


  }

  constructor() { }

  ngOnInit() {
  }

}
