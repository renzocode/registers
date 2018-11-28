import { TestBed } from '@angular/core/testing';

import { ApiseguridadService } from './apiseguridad.service';

describe('ApiseguridadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiseguridadService = TestBed.get(ApiseguridadService);
    expect(service).toBeTruthy();
  });
});
