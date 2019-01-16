import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosEmpresaComponent } from './contactos-empresa.component';

describe('ContactosEmpresaComponent', () => {
  let component: ContactosEmpresaComponent;
  let fixture: ComponentFixture<ContactosEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactosEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
