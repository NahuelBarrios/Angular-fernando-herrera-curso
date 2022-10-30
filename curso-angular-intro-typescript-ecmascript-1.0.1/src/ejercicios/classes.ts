
/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(private nombre: string, direccion: string) { }
}

class Heroe extends PersonaNormal {
    constructor(private alterEgo: string, private edad: number, private nombreReal: string, private direccion: string) {
        super(nombreReal, direccion)
    }
}

const ironman = new Heroe('Ironman', 35, 'Tony', 'calle falsa 124');

console.log(ironman);