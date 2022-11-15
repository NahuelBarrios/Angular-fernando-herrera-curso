import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'ironman';
    edad: number = 22;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarEdad(): void {
        this.edad = 10;
    }

    cambiarNombre(): void {
        this.nombre = 'spiderman';
    }
}