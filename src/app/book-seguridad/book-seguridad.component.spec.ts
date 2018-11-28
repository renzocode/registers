import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSeguridadComponent } from './book-seguridad.component';

describe('BookSeguridadComponent', () => {
  let component: BookSeguridadComponent;
  let fixture: ComponentFixture<BookSeguridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSeguridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
