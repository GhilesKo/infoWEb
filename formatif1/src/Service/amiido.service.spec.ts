/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AmiidoService } from './amiido.service';

describe('Service: Amiido', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmiidoService]
    });
  });

  it('should ...', inject([AmiidoService], (service: AmiidoService) => {
    expect(service).toBeTruthy();
  }));
});
