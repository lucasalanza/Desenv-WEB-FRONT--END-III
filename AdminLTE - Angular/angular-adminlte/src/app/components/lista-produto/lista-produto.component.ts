import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/Produto';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  listaProduto: Produto[] = [];

  ngOnInit(): void {
    var local = localStorage.getItem("listadeProdutos");

    if (local != null) {
      this.listaProduto = JSON.parse(local);
    }

  }

}
