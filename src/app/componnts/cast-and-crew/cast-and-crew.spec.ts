import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastAndCrew } from './cast-and-crew';

describe('CastAndCrew', () => {
  let component: CastAndCrew;
  let fixture: ComponentFixture<CastAndCrew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastAndCrew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastAndCrew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
