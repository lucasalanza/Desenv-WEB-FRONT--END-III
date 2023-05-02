import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Compromisso } from 'src/app/interfaces/Compromisso';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {


  listaCompromisso: Compromisso[] = [];
  compromisso: Compromisso = { descricao: "", horario: new Date(), tipo: "" }

  ngOnInit(): void {
    var local = localStorage.getItem("lista");
    if (local != null) {
      var aux = JSON.parse(local);
      for (let item of aux) {
this.listaCompromisso = [...this.listaCompromisso,{ descricao: item.descricao,horario: new Date(item.horario), tipo: item.tipo}]

      }
    }
  }

  adicionarCompromisso(): void {
    if (this.compromisso.descricao != "" && this.compromisso.horario != new Date()
      && this.compromisso.tipo != "") {

      this.listaCompromisso = [...this.listaCompromisso, {
        descricao: this.compromisso.descricao, tipo: this.compromisso.tipo,
        horario:  new Date(this.compromisso.horario),
      }];
      this.compromisso = { descricao: "", horario: new Date(), tipo: "" }
    }

    localStorage.setItem("lista", JSON.stringify(this.listaCompromisso));

  }

}
