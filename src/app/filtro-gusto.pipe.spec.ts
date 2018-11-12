import {  FiltroGusto } from './filtro-gusto.pipe';
import { Gusto } from 'src/domain/gusto';

const gustosDisponibles = [new Gusto('Carne'), new Gusto('Pollo') ]

function encontrar(criterioBusqueda: string, descripcionGusto: string) {
  const pipe = new FiltroGusto()
  const gustosFiltrados: Array<Gusto> = pipe.transform(gustosDisponibles, criterioBusqueda)
  expect(gustosFiltrados.length).toBe(1)
  const sabor = gustosFiltrados.pop()
  expect(sabor.descripcion).toBe(descripcionGusto)
}

describe('FiltroGusto', () => {
  it('filtro vacío devuelve la colección de gustos completa', () => {
    const pipe = new FiltroGusto()
    const gustosFiltrados = pipe.transform(gustosDisponibles, "")
    expect(gustosFiltrados.length).toBe(2)
  })
  it('filter by title works (case insensitive)', () => {
    encontrar("carn","Carne")
  })
})
