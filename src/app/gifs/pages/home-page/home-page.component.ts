import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  // Inyeccion de gifsService. Permite acceso a sus metodos y atributos.
  constructor(private gifsService: GifsService) { }

  // Obtiene gifList
  get gifs(): Gif[] {
    return this.gifsService.gifList
  }

}
