import { TestBed } from '@angular/core/testing';

import { EmployeeeeService } from './employeeee.service';

describe('EmployeeeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeeeService = TestBed.get(EmployeeeeService);
    expect(service).toBeTruthy();
  });
});
