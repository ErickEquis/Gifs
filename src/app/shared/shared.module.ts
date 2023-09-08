import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';


// Modulo que contiene componentes de nivel 'shared'.
// Aqui se declaran para ser usados en este nivel y se exportan para ser usados en otros.
@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  // Se exporta para que otros modulos puedan ocuparlo
  exports: [
    SidebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
