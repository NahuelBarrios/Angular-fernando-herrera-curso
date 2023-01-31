import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  intervalSubs: Subscription;

  constructor() {

    /* this.obtenerPromesa().pipe(retry(1))
       .subscribe(valor => console.log('Subs', valor),
         error => console.warn(error),
         () => console.info('OBS TERMINADO')
       );*/

    //this.obtenerIntervaloMap().subscribe(console.log);
    //this.obtenerIntervalorFilter().subscribe(console.log);
    this.intervalSubs = this.obtenerIntervaloDestroy().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  obtenerIntervaloMap(): Observable<number> {
    return interval(1000)
      .pipe( // pipe: Forma de transformar la informacion que fluye en un observable
        map(valor => valor + 1),
        take(4));
  }

  obtenerIntervalorFilter(): Observable<number> {
    return interval(500)
      .pipe( // pipe: Forma de transformar la informacion que fluye en un observable
        take(10),
        map(valor => valor + 1),
        filter(valor => valor % 2 === 0));
  }

  obtenerIntervaloDestroy(): Observable<number> {
    return interval(500)
      .pipe( // pipe: Forma de transformar la informacion que fluye en un observable
        map(valor => valor + 1),
        filter(valor => valor % 2 === 0));
  }

  obtenerPromesa(): Observable<number> {
    let i = -1;

    return new Observable<number>(observer => {

      //      let i = -1;
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
  }

  ngOnInit(): void {
  }

}
