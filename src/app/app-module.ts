import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { HijoCocheComponent } from './components/hijo-coche-component/hijo-coche-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { HijoDeporteComponent } from './components/hijo-deporte-component/hijo-deporte-component';
import { HijoNumeroComponent } from './components/hijo-numero-component/hijo-numero-component';
import { HijoComicComponet } from './components/hijo-comic-componet/hijo-comic-componet';
import { PadreComicsComponet } from './components/padre-comics-componet/padre-comics-componet';
import { ComicsSimpleComponet } from './components/comics-simple-componet/comics-simple-componet';
import { PadreNumerosComponet } from './components/padre-numeros-componet/padre-numeros-componet';

@NgModule({
  declarations: [
    App,
    ListaProductosComponent,
    HomeComponent,
    MenuComponent,
    HijoCocheComponent,
    PadreCochesComponent,
    PadreDeportesComponent,
    HijoDeporteComponent,
    PadreNumerosComponet,
    HijoNumeroComponent,
    HijoComicComponet,
    PadreComicsComponet,
    ComicsSimpleComponet,
    PadreNumerosComponet,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
