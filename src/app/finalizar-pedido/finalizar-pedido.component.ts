import { Component, OnInit } from '@angular/core';
import { IniciarPedidoComponent } from '../iniciar-pedido/iniciar-pedido.component';
import { Gusto } from 'src/domain/gusto';
import { Pedido } from 'src/domain/pedido';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent implements OnInit {
  pedidoRecibido: Pedido

  constructor(nuevoPedido: Pedido) { 
    this.pedidoRecibido = nuevoPedido
  }

  ngOnInit() {
  }

}
