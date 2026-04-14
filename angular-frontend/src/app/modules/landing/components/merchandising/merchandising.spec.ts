import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Merchandising } from './merchandising';

describe('Merchandising', () => {
  let component: Merchandising;
  let fixture: ComponentFixture<Merchandising>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Merchandising]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Merchandising);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
