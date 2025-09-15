import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coming } from './coming';

describe('Coming', () => {
  let component: Coming;
  let fixture: ComponentFixture<Coming>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coming]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coming);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
