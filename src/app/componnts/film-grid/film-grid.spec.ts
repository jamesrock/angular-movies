import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmGrid } from './film-grid';

describe('FilmGrid', () => {
  let component: FilmGrid;
  let fixture: ComponentFixture<FilmGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
