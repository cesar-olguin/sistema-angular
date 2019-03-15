import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClausulasNuevaCotizacionComponent } from './clausulas-nueva-cotizacion.component';

describe('ClausulasNuevaCotizacionComponent', () => {
  let component: ClausulasNuevaCotizacionComponent;
  let fixture: ComponentFixture<ClausulasNuevaCotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClausulasNuevaCotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClausulasNuevaCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
