import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoNuevaCotizacionComponent } from './deposito-nueva-cotizacion.component';

describe('DepositoNuevaCotizacionComponent', () => {
  let component: DepositoNuevaCotizacionComponent;
  let fixture: ComponentFixture<DepositoNuevaCotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositoNuevaCotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositoNuevaCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
