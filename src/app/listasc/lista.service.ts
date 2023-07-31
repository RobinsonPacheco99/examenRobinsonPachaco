import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private data: any[] = [
    {
      codigoregistro: "1",
      fecha: "25/12/2000",
      cliente: "MARIA LOPEZ",
      tipodeinteraccion: "fb",
      descripcion: "Transacciones comerciales"
    },
    {
      codigoregistro: "2",
      fecha: "10/02/2000",
      cliente: "CARLOS REYES",
      tipodeinteraccion: "instagram",
      descripcion: "Engagement con publicaciones"
    },
    {
      codigoregistro: "3",
      fecha: "18/11/2000",
      cliente: "LUISA GALARZA",
      tipodeinteraccion: "ws",
      descripcion: "Mensajes corporativos"
    },
    {
      codigoregistro: "4",
      fecha: "17/02/2000",
      cliente: "JOSE RAMIREZ",
      tipodeinteraccion: "telefono fijo",
      descripcion: "Reuniones de seguimiento"
    },
    {
      codigoregistro: "5",
      fecha: "10/5/2000",
      cliente: "ANA RUIZ",
      tipodeinteraccion: "instagram",
      descripcion: "Investigación de mercado"
    },
    {
      codigoregistro: "6",
      fecha: "30/12/2000",
      cliente: "SANTIAGO PARDO",
      tipodeinteraccion: "ws",
      descripcion: "Consultas sobre el producto"
    },
    {
      codigoregistro: "7",
      fecha: "5/11/2000",
      cliente: "FERNANDO QUISPE",
      tipodeinteraccion: "celular",
      descripcion: "Coordinación de proyectos"
    },
    {
      codigoregistro: "8",
      fecha: "17/12/2000",
      cliente: "SARA VALLES",
      tipodeinteraccion: "fb",
      descripcion: "Planificación de marketing"
    },
    {
      codigoregistro: "9",
      fecha: "23/11/2000",
      cliente: "JORGE BURGOS",
      tipodeinteraccion: "instagram",
      descripcion: "Desarrollo de estrategia de contenido"
    },
    {
      codigoregistro: "10",
      fecha: "23/11/2000",
      cliente: "ISABEL REYES",
      tipodeinteraccion: "instagram",
      descripcion: "Monitoreo de competidores"
    }
  ];


  private resultados: any[] = [];
  addData(data) { this.data.push(data); }
  getData() { return this.data; }
  setResultados(resultados) { this.resultados = resultados; }
  getResultados() { return this.resultados; }

  // Editar un objeto de la lista por su código de registro
  editData(codigoRegistro: string, updatedData) {
    const index = this.data.findIndex((data) => data.codigoregistro === codigoRegistro);
    if (index !== -1) {
      this.data[index] = updatedData;
    }
  }

  // Eliminar un objeto de la lista por su código de registro
  deleteData(codigoRegistro: string) {
    const index = this.data.findIndex((data) => data.codigoregistro === codigoRegistro);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  // Buscar un objeto en la lista por su código de registro
  searchData(codigoRegistro: string) {
    const index = this.data.findIndex((data) => data.codigoregistro === codigoRegistro);
    if (index !== -1) {
      return this.data[index];
    }
    return null;
  }


  private ListadeDatos: ListaDatos[] = [

  ];
}
export interface ListaDatos {
  codigoregistro: string;
  fecha: string;
  cliente: string;
  tipodeinteraccion: string;
  descripcion: string;
}

