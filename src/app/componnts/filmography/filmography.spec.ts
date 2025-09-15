import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filmography } from './filmography';

describe('Filmography', () => {
  let component: Filmography;
  let fixture: ComponentFixture<Filmography>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Filmography]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Filmography);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
