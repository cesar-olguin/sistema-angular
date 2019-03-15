import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosNuevaCotizacionComponent } from './servicios-nueva-cotizacion.component';

describe('ServiciosNuevaCotizacionComponent', () => {
  let component: ServiciosNuevaCotizacionComponent;
  let fixture: ComponentFixture<ServiciosNuevaCotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosNuevaCotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosNuevaCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
