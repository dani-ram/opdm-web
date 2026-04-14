import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biografia } from './biografia';

describe('Biografia', () => {
  let component: Biografia;
  let fixture: ComponentFixture<Biografia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Biografia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Biografia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
