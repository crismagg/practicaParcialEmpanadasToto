import { Pipe, PipeTransform } from '@angular/core';
import { Gusto } from 'src/domain/gusto';

@Pipe({
  name: 'filtroGusto'
})
export class FiltroGusto implements PipeTransform {

  transform(gustosDisponibles: Array<Gusto>, gustoABuscar: String): any {
    return gustosDisponibles.filter(gusto => 
      gustoABuscar === "" || this.coincide(gusto.descripcion, gustoABuscar) || this.coincide(gusto.descripcion, gustoABuscar)
    ) 
  }

  coincide(gustoDisponible: String, gustoBuscado: String) {
    return gustoDisponible.toLowerCase().match(gustoBuscado.toLowerCase())
  }

}
