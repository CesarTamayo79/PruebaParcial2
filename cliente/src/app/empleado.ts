// Desarrollado por: Cesar Augusto Tamayo Ñaupa
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private apiUrl = 'http://localhost:3000/api/empleado';

  constructor(private http: HttpClient) { }

  obtenerEmpleado(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}