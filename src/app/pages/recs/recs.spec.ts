import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recs } from './recs';

describe('Recs', () => {
  let component: Recs;
  let fixture: ComponentFixture<Recs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
