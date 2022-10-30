
/*
    ===== Código de TypeScript =====
*/

import { Producto, calcularISV } from './desestructuracion-function';

const carritoCompras: Producto[] = [
    {
        name: 'Telefono 1',
        price: 400
    },
    {
        name: 'Telefono 2',
        price: 500
    }
]

const [total, isv] = calcularISV(carritoCompras);
console.log(' total: ' + total);
console.log('Impuesto: ' + isv);