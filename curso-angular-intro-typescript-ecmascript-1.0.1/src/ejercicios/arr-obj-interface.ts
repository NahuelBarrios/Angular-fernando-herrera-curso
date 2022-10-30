/*
    ===== Código de TypeScript =====
*/


let palabras: string[] = ['Asd', 'Dsa'];

console.log(palabras);

interface Persona {
    nombres: string[];
    apellido: string;
    dni: number;
    sexo?: string; // se le agrega el ? para saber que es opcional
}

const persona1: Persona = {
    nombres: ['walter', 'nahuel'],
    apellido: 'barrios',
    dni: 123
}

persona1.sexo = 'transespecie';

console.table(persona1)
