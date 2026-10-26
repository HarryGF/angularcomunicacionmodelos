import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { HijoCocheComponent } from './components/hijo-coche-component/hijo-coche-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { PadreNumerosComponet } from './components/padre-numeros-componet/padre-numeros-componet';
import { PadreComicsComponet } from './components/padre-comics-componet/padre-comics-componet';
import { ComicsSimpleComponet } from './components/comics-simple-componet/comics-simple-componet';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "listaproductos", component: ListaProductosComponent},
  {path: "coches", component: PadreCochesComponent},
  {path: "deportes", component: PadreDeportesComponent},
  {path: "sumar", component: PadreNumerosComponet},
  {path: "comicssimples", component: ComicsSimpleComponet}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
