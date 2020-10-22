import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MovimientosComponent } from './pages/movimientos/movimientos.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'listado',
      component: ListadoComponent,
    },
    {
      path: 'detalle/:id',
      component: DetalleComponent
    },
    {
      path: 'movimientos/:id',
      component: MovimientosComponent
    },
    {
      path:'**',
      component: ErrorComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
