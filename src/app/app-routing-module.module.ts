import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { RouterModule } from '@angular/router';

let routes = [
  
   { path : "consulta", component: ConsultaComponent},
   { path : "**" , redirectTo:"/resumo"}
 ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModuleModule { }
