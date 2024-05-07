import { TestBed } from '@angular/core/testing';

import { DarkPaletteService } from './dark-palette.service';

describe('DarkPaletteService', () => {
  let service: DarkPaletteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkPaletteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
