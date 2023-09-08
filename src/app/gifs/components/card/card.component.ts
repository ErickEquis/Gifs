import { Component, OnInit, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {

  // Decorador que permite recibir atributos de componentes padres
  @Input()
  public gif!: Gif

  // ngOnInit: enlace de ciclo de vida que permite manejar las tareas de inicializacion adicionales al constructor
  ngOnInit(): void {
    if (!this.gif) throw new Error('Propiedad Gif es requerida')
  }

}
