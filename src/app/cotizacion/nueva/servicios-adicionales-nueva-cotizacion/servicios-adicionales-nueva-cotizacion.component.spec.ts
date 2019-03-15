import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosAdicionalesNuevaCotizacionComponent } from './servicios-adicionales-nueva-cotizacion.component';

describe('ServiciosAdicionalesNuevaCotizacionComponent', () => {
  let component: ServiciosAdicionalesNuevaCotizacionComponent;
  let fixture: ComponentFixture<ServiciosAdicionalesNuevaCotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosAdicionalesNuevaCotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosAdicionalesNuevaCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
