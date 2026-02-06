import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmpleadoService } from './empleado';

describe('EmpleadoService (TDD)', () => {
  let service: EmpleadoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmpleadoService]
    });
    service = TestBed.inject(EmpleadoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Debe crearse el servicio correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar el nombre del empleado solicitado', () => {

    const mockDatos = {
      mensaje: 'Exito',
      data: { id: 1, nombre: 'Cesar Tamayo' }
    };

    service.obtenerEmpleado(1).subscribe(res => {

      //expect(res.data.nombre).toEqual('Jose Tamayo');
      expect(res.data.nombre).toEqual('Cesar Tamayo');
    });

    const req = httpMock.expectOne('http://localhost:3000/api/empleado/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockDatos);
  });


});