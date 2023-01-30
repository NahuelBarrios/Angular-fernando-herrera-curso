import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() {

    const obs$ = new Observable(observer => {

      let i = -1;
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          observer.error('Se cancelo todo');
        }
      }, 1000);

    });

    obs$.subscribe(valor => console.log('Subs', valor),
      error => console.warn(error),
      () => console.info('OBS TERMINADO')
    );

  }

  ngOnInit(): void {
  }

}
