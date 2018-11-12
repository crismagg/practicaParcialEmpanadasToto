import { Component, OnInit, Input } from '@angular/core';
import { Gusto } from 'src/domain/gusto';
import { FinalizarPedidoComponent } from '../finalizar-pedido/finalizar-pedido.component';
import { Pedido } from 'src/domain/pedido';

@Component({
  selector: 'app-iniciar-pedido',
  templateUrl: './iniciar-pedido.component.html',
  styleUrls: ['./iniciar-pedido.component.css']
})
export class IniciarPedidoComponent implements OnInit {
  gustosDisponibles: Array<Gusto> = []
  gustoABuscar: String = ''
  mensajeDeError: String = ""

  constructor() {

  }

  ngOnInit() {
    this.gustosDisponibles.push(new Gusto('CARNE LA REINA'))
    this.gustosDisponibles.push(new Gusto('QUESO Y CEBOLLA'))
    this.gustosDisponibles.push(new Gusto('ROQUEFORT Y APIO'))
    this.gustosDisponibles.push(new Gusto('HUMITA'))
    this.gustosDisponibles.push(new Gusto('ATÚN'))
    this.gustosDisponibles.push(new Gusto('CAPRESE'))
  }

  sumar(gusto: Gusto) {
    gusto.cantidad++
  }

  restar(gusto: Gusto) {
    gusto.cantidad--
  }

  noPuedeSerMenorACero(gusto: Gusto) {
    return gusto.cantidad <= 0
  }

  validaCantidadMinima() {  //En el pedido debe haber por lo menos 4 empanadas
    let suma = 0
    this.gustosDisponibles.forEach(function (gusto) { suma = suma + gusto.cantidad })

    this.mensajeDeError = ""

    if (suma < 4) {
      this.mensajeDeError = "Debe pedir un minimo de 4 empanadas"
    }
  }

  aceptar() {
     this.validaCantidadMinima()
    // let nuevoPedido = new Pedido()
    // this.gustosDisponibles.forEach(function (gusto) {
    //   if (gusto.cantidad > 0) {
    //     nuevoPedido.agregarGustosAlPedido(gusto)
    //   }
    // })
    // new FinalizarPedidoComponent(nuevoPedido)
  }
  
}
