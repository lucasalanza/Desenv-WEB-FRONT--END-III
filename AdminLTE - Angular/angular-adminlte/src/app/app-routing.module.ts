import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './components/agenda/agenda.component';
import { HomeComponent } from './components/home/home.component';
import { ListaProdutoComponent } from './components/lista-produto/lista-produto.component';
import { ProdutoComponent } from './components/produto/produto.component';

const routes: Routes = [
  // {path:'',component: }
  { path: '', component: HomeComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'listaProduto', component: ListaProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
