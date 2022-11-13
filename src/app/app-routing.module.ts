import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProductosComponent } from './components/productos/productos.component';
import { SunatComponent } from './components/Sunat/sunat/sunat.component';

const routes: Routes = [
  {
    path:'cliente',
    component:ClienteComponent
  },

  {
    path:'productos',
    component:ProductosComponent
  },
  {
    path:'sunat',
    component:SunatComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
