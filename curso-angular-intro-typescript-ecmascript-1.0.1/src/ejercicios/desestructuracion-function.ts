
/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    name: string;
    price: number;
}

const telefono: Producto = {
    name: 'Moto g',
    price: 100
}

const tableta: Producto = {
    name: 'name',
    price: 200
}

export function calcularISV(productos: Producto[]): [number, number] {
    let total = 0;

    productos.forEach(({ price }) => {
        total += price;
    })
    return [total, total * 0.15];
}

//const productos: Producto[] = [telefono, tableta];

//const [total, impuesto] = calcularISV(productos);

//console.log('Total: ' + total);
//console.log('Impuesto: ' + impuesto);