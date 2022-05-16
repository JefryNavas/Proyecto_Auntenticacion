import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthNoIngresadoGuard } from './guards/auth-no-ingresado.guard';
import { AutenticarGuard } from './guards/autenticar.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    , canActivate: [AuthNoIngresadoGuard]
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then(m => m.RegistrarPageModule)
    , canActivate: [AuthNoIngresadoGuard]
  },
  {
    path: 'autenticar',
    loadChildren: () => import('./pages/autenticar/autenticar.module').then(m => m.AutenticarPageModule)
    , canActivate: [AutenticarGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
    , canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
