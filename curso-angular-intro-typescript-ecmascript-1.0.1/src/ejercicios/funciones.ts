
/*
    ===== Código de TypeScript =====
*/

function multiplicar(numberOne: number, numberTwo?: number, numberThree: number = 2): number {
    return numberOne * numberThree;
}
const number = multiplicar(10);
console.log(number);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, life: number): void {
    personaje.pv += life;
}

const newPersonaje: PersonajeLOR = {
    nombre: 'nahuel',
    pv: 40,
    mostrarHp() {
        console.log('Puntos de vida: ' + this.pv);
    }
}

curar(newPersonaje, 60);
newPersonaje.mostrarHp();