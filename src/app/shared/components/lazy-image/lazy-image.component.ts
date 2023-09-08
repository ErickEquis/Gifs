import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})

// ngOnInit: enlace de ciclo de vida que permite manejar las tareas de inicializacion adicionales al constructor
export class LazyImageComponent implements OnInit {

  // @Input() es decorador y dice que data se recibira de un componente padre.
  @Input()
  public url!: string
  @Input()
  public alt: string = ''

  public hasLoaded: boolean = false

  // ?
  ngOnInit(): void {
    if (!this.url) throw new Error('Propiedad URL es requerida');
  }

  onLoad() {
    this.hasLoaded = true
  }

}
