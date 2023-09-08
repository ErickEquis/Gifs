import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
      >
      <!--
        (keyup.enter) evento cuando se levanta tecla 'Enter' al presionar
        #txtTagInput referencia para @ViewChild y su manejo de DOM
      -->
  `

})
export class SearchBoxComponent {

  //@ViewChild: Permite manipular el DOM en base a una referencia #ref. Es similar a un 'querySelector'
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  // Inyeccion de gifsService para uso de metodos y atributos
  constructor( private gifsService: GifsService ) { }

  // Busca un tag
  searchTag() {
    // Obtiene valor de #ref en DOM
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }

}
