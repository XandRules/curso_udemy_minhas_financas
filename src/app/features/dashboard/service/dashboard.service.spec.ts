import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { entradasMock } from 'src/app/shared/mocks/entradas.mock';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be called getEntradas method', () => {
    const httpMock = TestBed.inject(HttpTestingController);

    const payload = {
      mes: '09',
      ano: '2023'
    }

    const endpoint = 'entradas';

    service.getEntradas(payload).subscribe(result => {
      expect(result[0].nome).toBe('Aluguel')
    })

    const mockRequest = httpMock.expectOne(`http://localhost:3000/${endpoint}?q=${payload.mes}-${payload.ano}`);
    mockRequest.flush(entradasMock);

    expect(mockRequest).toBeTruthy();
  });

});
