import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heores: string[] = ['Spiderman', 'Hulk', 'Nahu'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('borrando..');
    this.heroeBorrado = this.heores.shift() || '';
  }

}
