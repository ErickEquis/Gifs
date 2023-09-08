import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';


// Modulo que contiene componentes de nivel 'gifs'.
// Aqui se declaran para ser usados en este nivel y se exportan para ser usados en otros.
@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent
  ],
  // SharedModule es importado para ser usado en este nivel
  imports: [
    CommonModule,
    SharedModule
  ],
  // HomePageComponent es exportado para ser usado en otros niveles
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
