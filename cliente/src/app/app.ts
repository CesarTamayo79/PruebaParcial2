// Desarrollado por: Cesar Augusto Tamayo Ñaupa
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmpleadoService } from './empleado';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  idBusqueda: number = 0;
  empleado: any = null;
  mensaje: string = '';

  constructor(private empleadoService: EmpleadoService) { }

  buscarEmpleado() {
    if (this.idBusqueda > 0) {
      this.empleadoService.obtenerEmpleado(this.idBusqueda).subscribe({
        next: (respuesta) => {
          this.empleado = respuesta.data;
          this.mensaje = respuesta.mensaje;
        },
        error: (error) => {
          console.error(error);
          this.empleado = null;
          this.mensaje = 'Error: No se pudo conectar o empleado no existe.';
        }
      });
    } else {
      alert('Por favor escribe un ID válido');
    }
  }
}