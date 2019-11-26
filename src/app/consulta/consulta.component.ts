import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  consultas = {
     "abertas" : [
                  { "un" : "001", "dt_os" : "10/11/2019" }
                  
             ]
  }

  constructor() { }

  ngOnInit() {
  }

}
