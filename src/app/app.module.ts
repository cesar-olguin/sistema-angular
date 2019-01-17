import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { ActividadComponent } from './actividad/actividad.component';
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

// import { LoginService } from './auth/login/login.service';

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
    PersonalComponent
  ],
  imports: [BrowserModule, AppRouting, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
