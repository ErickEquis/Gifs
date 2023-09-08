import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  // El constructor se llama cuando se inicializa el componente
  // Inyeccion de gifsService donde se contiene y maneja data
  constructor(private gifsService: GifsService) { }

  // Metodo get que permite tratar un metodo como una propiedad
  get tags(): string[] {
    return this.gifsService.tagsHstory
  }

  // Metodo para buscar un tag que ya fue buscado.
  reSearchTag(tag: string): void{
    this.gifsService.searchTag(tag)
  }

}
