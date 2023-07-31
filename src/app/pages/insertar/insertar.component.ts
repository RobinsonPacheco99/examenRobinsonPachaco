import { Component } from '@angular/core';
import { ListaService } from '../../listasc/lista.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent {
  codigoRegistro: string;
  fecha: string;
  cliente: string;
  tipointeraccion: string;
  descripcion: string;
  constructor(private dataService: ListaService) {
  }
  guardar() {
    // Validaciones
    if (!this.codigoRegistro || !this.fecha || !this.cliente || !this.tipointeraccion || !this.descripcion) {
      Swal.fire({
        text: 'Por favor, complete todos los campos.',
        icon: 'warning',
      });
      return; // Detener la ejecución si hay campos vacíos
    }
  
    // Si todas las validaciones pasan, guardar los datos
    const data = {
      codigoregistro: this.codigoRegistro,
      fecha: this.fecha,
      cliente: this.cliente,
      tipodeinteraccion: this.tipointeraccion,
      descripcion: this.descripcion
    };
    this.dataService.addData(data);
  
    // Mostrar la alerta de éxito después de guardar los datos
    Swal.fire({
      text: 'Se insertó correctamente el registro.',
      icon: 'success',
      timer: 3000,
    });
  
    // Limpiar los campos después de guardar
    this.codigoRegistro = '';
    this.fecha = '';
    this.cliente = '';
    this.tipointeraccion = '';
    this.descripcion = '';
  }
  
  cancelar() {
    this.codigoRegistro = '';
    this.fecha = '';
    this.cliente = '';
    this.tipointeraccion = '';
    this.descripcion = '';
  }
}
