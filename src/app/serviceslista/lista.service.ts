import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  // Esta es la lista donde guardaremos los datos. En este ejemplo, es una lista de objetos genéricos.
  private lista: any[] = [];

  constructor() { }

  // Este método agrega un objeto de datos a la lista
  addData(data: any) {
    this.lista.push(data);
  }

  // Este método devuelve la lista de datos. Puedes usarlo si necesitas acceder a los datos en algún momento.
  getData() {
    return this.lista;
  }

  // Este método limpia la lista. Puedes usarlo si necesitas eliminar todos los datos en algún momento.
  clearData() {
    this.lista = [];
  }
}
