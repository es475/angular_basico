import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadoresModule } from './contadores/contadores.module';

import { HeroesModule } from './heroes/heroes.module';
/* SE eliman las impor de los Heroes */
/* import { HeroeComponenet } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component'; */

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
