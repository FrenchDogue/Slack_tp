import { TestBed } from '@angular/core/testing';

import { CanauxMessagesService } from './canaux-messages.service';

describe('CanauxMessagesService', () => {
  let service: CanauxMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanauxMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
