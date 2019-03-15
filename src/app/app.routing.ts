import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadComponent } from './actividades/actividad/actividad.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { LoginComponent } from './auth/login/login.component';
import { NuevaEmpresaComponent } from './empresa/nueva-empresa/nueva-empresa.component';
import { DatosFiscalesComponent } from './empresa/datos-fiscales/datos-fiscales.component';
import { ContactosEmpresaComponent } from './empresa/contactos-empresa/contactos-empresa.component';
import { ProveedorComponent } from './empresa/proveedor-empresa/proveedor.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { PersonalComponent } from './personal/personal.component';
import { AgregarPersonalComponent } from './personal/agregar-personal/agregar-personal.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { NuevaComponent } from './cotizacion/nueva/nueva.component';
import { DepositoNuevaCotizacionComponent } from './cotizacion/nueva/deposito-nueva-cotizacion/deposito-nueva-cotizacion.component';
import { ServiciosAdicionalesNuevaCotizacionComponent } from './cotizacion/nueva/servicios-adicionales-nueva-cotizacion/servicios-adicionales-nueva-cotizacion.component';
import { ClausulasNuevaCotizacionComponent } from './cotizacion/nueva/clausulas-nueva-cotizacion/clausulas-nueva-cotizacion.component';
import { ServiciosNuevaCotizacionComponent } from './cotizacion/nueva/servicios-nueva-cotizacion/servicios-nueva-cotizacion.component';

const routes: Routes = [
  { path: 'actividades/registro', component: ActividadComponent },
  { path: 'usuario/login', component: LoginComponent},
  // Empresa
  { path: 'empresas', component: EmpresaComponent, children: [
    { path: 'nueva-empresa', component: NuevaEmpresaComponent },
    { path: 'datos-fiscales', component: DatosFiscalesComponent },
    { path: 'contacto', component: ContactosEmpresaComponent },
    { path: 'proveedor', component: ProveedorComponent },
    { path: 'fiscales', component: DatosFiscalesComponent },
    { path: 'contacto', component: ContactosEmpresaComponent }
  ] },
  // Personal
  { path: 'personal', component: PersonalComponent, children: [
    { path: 'nuevo', component: AgregarPersonalComponent },
    { path: 'editar', component: AgregarPersonalComponent },
  ] },
  // Actividades
  { path: 'actividades', component: ActividadesComponent, children: [
    { path: 'nueva-actividad', component: ActividadComponent }
  ] },
  { path: 'cotizacion', component: CotizacionComponent, children: [
    { path: 'nueva', component: NuevaComponent, children: [
      { path: 'servicios', component: ServiciosNuevaCotizacionComponent },
      { path: 'deposito', component: DepositoNuevaCotizacionComponent },
      { path: 'servicios-adicionales', component: ServiciosAdicionalesNuevaCotizacionComponent },
      { path: 'clausulas', component: ClausulasNuevaCotizacionComponent }
    ] },
  ] },
  // Pagina 404
  { path: '404', component: Pagina404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
