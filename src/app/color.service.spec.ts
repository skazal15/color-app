import { TestBed } from '@angular/core/testing';

import { ColorService } from './color.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

describe('ColorService', () => {
  let service: ColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
