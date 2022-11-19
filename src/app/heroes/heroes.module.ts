import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponenet } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponenet,
        ListadoComponent
    ],
    exports: [
        HeroeComponenet,
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule {

}