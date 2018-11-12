import { Gusto } from "./gusto";

export class Pedido {
    gustosPedidos: Array<Gusto> = [];
    precioUnitarioDeCadaEmpanada: number

    constructor(){
        this.precioUnitarioDeCadaEmpanada = 20
    }

    agregarGustosAlPedido(gusto: Gusto){
        this.gustosPedidos.push(gusto)
    }
}
