import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosFiscalesComponent } from './datos-fiscales.component';

describe('DatosFiscalesComponent', () => {
  let component: DatosFiscalesComponent;
  let fixture: ComponentFixture<DatosFiscalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosFiscalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosFiscalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
