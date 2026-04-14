import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Galeriaprogramas } from './galeriaprogramas';

describe('Galeriaprogramas', () => {
  let component: Galeriaprogramas;
  let fixture: ComponentFixture<Galeriaprogramas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Galeriaprogramas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Galeriaprogramas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
