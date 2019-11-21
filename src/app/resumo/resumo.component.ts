import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {
  ordem = {
       abertas : {
               total : {
                            total : 32990,
                       },
               hoje : {
                        total : 2,
                      },
               semana : {
                        total : 92,
                        },
               mes : {
                        total : 692,
                        },
               ano : {
                        total : 992,
                      }
     },

     fechadas : {
        
        hoje : 2,
        semana :90,
        mes : 600,
        ano : 400
     }
    }

  constructor() { }

  ngOnInit() {

    
  }

}
