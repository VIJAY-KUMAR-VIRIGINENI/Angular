import { TestBed } from '@angular/core/testing';

import { AddService } from './add.service';

describe('AddService', () => {
  let service=new  AddService();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddService);
  });

  it('string testing',()=>{
expect(service.add('vijay','kumar')).toBe('vijaykumar');
  })
  it('adding integers',()=>{
    expect(service.addNumbers(2,3).toPrecision(5));
  })
  it('should be created', () => {
    service.products.length = 2;
    service.addproduct("test",1);  
    expect(service.products.length).toBe(3);
    expect(service.products[2].name).toBe("test");
  });
});
