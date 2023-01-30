import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    });

  }

  getUsuarios() {
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users') // DE ESTA URL
        .then(resp => resp.json()) // OBTENGO EL JSON DE LA RESPUESTA
        .then(body => resolve(body.data)) // DEL JSON OBTENGO LA DATA.
    });
  }



  /*const promesa = new Promise((resolve, reject) => {
    if (true) {
      resolve('Funciona todo Ok');
    } else {
      reject('ERROR');
    }
  });

  promesa.then(resolve => {
    console.log(resolve);
  }).catch(error => { console.log(error) });

  console.log('Fin del OnInit')
*/

}
