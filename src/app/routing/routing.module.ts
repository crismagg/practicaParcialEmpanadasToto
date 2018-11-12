import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizarPedidoComponent } from '../finalizar-pedido/finalizar-pedido.component';
import { IniciarPedidoComponent } from '../iniciar-pedido/iniciar-pedido.component';

export const routes: Routes = [
  { path: '', redirectTo: 'iniciar-pedido', pathMatch: 'full' },
  { path: 'iniciar-pedido', component: IniciarPedidoComponent },
  { path: 'finalizar-pedido', component: FinalizarPedidoComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IniciarPedidoComponent, FinalizarPedidoComponent];