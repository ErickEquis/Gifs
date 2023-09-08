import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

// Service: No contienen logica o vista hacia al usuario, son enfocados a la validacion y/u obtencios de datos.
// Pueden ser utilizados por cualquier compente que asi lo requiera
// @Injectable decorador que indica que será una servicio de Angular
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = []

  private _tagsHistory: string[] = [];
  private apiKey: string = 'HAPmYSjHSIbLGbrEQArpOd8BCWpmPQcJ'
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  // Service HttpClient (propio de Angular) inyectado en constructor para que pueda ser utilizado en este servicio.
  constructor(private http: HttpClient) {
    this.loadLocalStorage()
  }

  // Copia de historial de tags
  get tagsHstory() {
    return [...this._tagsHistory]
  }

  // Metodo para manejo de tags
  private orgnizeHistory(tag: string) {
    tag = tag.toLowerCase()

    // Verifica si existe tag en localStorage
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift(tag)
    // truncamiento de tamaño en localStorage
    this._tagsHistory = this.tagsHstory.splice(0, 10)
    this.saveLocalStorage()
  }

  // Guarda arreglo en localStorage
  private saveLocalStorage(): void {
    // Serializa y manda arreglo a localStorage
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  // Carga localStorage
  private loadLocalStorage(): void {
    // Si no se ha creado arreglo termina proceso
    if (!localStorage.getItem('history')) return
    // Deserializa arreglo y lo asigna a un objeto
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!)

    // ?
    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0])
  }

  // Peticiones http para buscar tag
  searchTag(tag: string): void {
    if (tag.length === 0) return
    this.orgnizeHistory(tag)

    // Manejo de parametros para endpoint
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '15')
      .set('q', tag)

    // Metodo get que recibe paramentros.
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      // 'subscribe': emite valores hasta que se termine su ciclo de vida, estos seran captados por un observador.
      .subscribe(resp => {
        // Almacena respuesta en gifsList
        this.gifList = resp.data
      })

  }

}
