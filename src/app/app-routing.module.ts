import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
{ path: 'list', loadChildren: () => import('./pages/clients/list/clientes.module').then(m => m.ClientesModule) },
{ path: 'usuarios', loadChildren: () => import('./pages/usuarios/usuarios.module').then(m => m.UsuariosModule) },
{ path: 'perfil', loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilModule) },
{ path: 'info', loadChildren: () => import('./pages/clients/info/info.module').then(m => m.InfoModule) },
{ path: 'detail', loadChildren: () => import('./pages/clients/detail/detail.module').then(m => m.DetailModule) },
{ path: 'pago', loadChildren: () => import('./pages/clients/pago/pago.module').then(m => m.PagoModule) },
{ path: 'newC', loadChildren: () => import('./pages/clients/new/new.module').then(m => m.NewModule) },
{ path: 'editC', loadChildren: () => import('./pages/clients/edit-c/edit-c.module').then(m => m.EditCModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
