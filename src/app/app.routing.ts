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
  { path: 'personal', component: PersonalComponent  },
  { path: 'personal/nuevo', component: AgregarPersonalComponent },
  { path: 'personal/editar', component: AgregarPersonalComponent },
  // Actividades
  { path: 'actividades', component: ActividadesComponent, children: [
    { path: 'nueva-actividad', component: ActividadComponent }
  ] },
  { path: 'cotizacion', component: Pagina404Component },
  // Pagina 404
  { path: '404', component: Pagina404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
