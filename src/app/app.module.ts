import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { ActividadComponent } from './actividades/actividad/actividad.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { LoginComponent } from './auth/login/login.component';

import { FormsModule } from '@angular/forms';
import { NuevaEmpresaComponent } from './empresa/nueva-empresa/nueva-empresa.component';
import { ModificarEmpresaComponent } from './empresa/modificar-empresa/modificar-empresa.component';
import { DatosFiscalesComponent } from './empresa/datos-fiscales/datos-fiscales.component';
import { ContactosEmpresaComponent } from './empresa/contactos-empresa/contactos-empresa.component';
import { ProveedorComponent } from './empresa/proveedor-empresa/proveedor.component';
import { VerUsuariosComponent } from './usuarios/ver-usuarios/ver-usuarios.component';
import { AgregarPersonalComponent } from './personal/agregar-personal/agregar-personal.component';
import { FooterComponent } from './template/footer/footer.component';
import { MenuComponent } from './empresa/menu-empresa/menu.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { PersonalComponent } from './personal/personal.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { NuevaComponent } from './cotizacion/nueva/nueva.component';
import { DepositoNuevaCotizacionComponent } from './cotizacion/nueva/deposito-nueva-cotizacion/deposito-nueva-cotizacion.component';
import { ServiciosAdicionalesNuevaCotizacionComponent } from './cotizacion/nueva/servicios-adicionales-nueva-cotizacion/servicios-adicionales-nueva-cotizacion.component';
import { ClausulasNuevaCotizacionComponent } from './cotizacion/nueva/clausulas-nueva-cotizacion/clausulas-nueva-cotizacion.component';
import { ServiciosNuevaCotizacionComponent } from './cotizacion/nueva/servicios-nueva-cotizacion/servicios-nueva-cotizacion.component';
// import { LoginService } from './auth/login/login.service';

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActividadComponent,
    Pagina404Component,
    LoginComponent,
    NuevaEmpresaComponent,
    ModificarEmpresaComponent,
    DatosFiscalesComponent,
    ContactosEmpresaComponent,
    ProveedorComponent,
    VerUsuariosComponent,
    AgregarPersonalComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    EmpresaComponent,
    PersonalComponent,
    ActividadesComponent,
    CotizacionComponent,
    NuevaComponent,
    DepositoNuevaCotizacionComponent,
    ServiciosAdicionalesNuevaCotizacionComponent,
    ClausulasNuevaCotizacionComponent,
    ServiciosNuevaCotizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    BrowserAnimationsModule,
    modules,
    NgbModule
  ],
  exports: [modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
