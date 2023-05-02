import { Component } from '@angular/core';
import { Produto } from 'src/app/interfaces/Produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  produto: Produto = { descricao: "", quantidade: 0, codigo: 0, categoria: "" }
  
  adicionarProduto(): void {
    if (this.produto.descricao != "" && this.produto.categoria != "" && this.produto.codigo > 0) {

      var local = localStorage.getItem("listadeProdutos");
      var listaProduto: Produto[] = [];
      if (local != null) {
        listaProduto = JSON.parse(local);
      }
      listaProduto = [...listaProduto, this.produto];

      localStorage.setItem("listadeProdutos", JSON.stringify(listaProduto));
      this.produto = { descricao: "", quantidade: 0, codigo: 0, categoria: "" }

      alert("produto cadastrado");
    }
  }

}
