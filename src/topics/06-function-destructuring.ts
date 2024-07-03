//Se estandarizan los productos
export interface Product {
    description: string;
    price: number;
}

//Se crean 2 productos
const videogame: Product = {
    description: 'Xbox Series S',
    price: 200
}

const phone: Product = {
    description: 'Iphone 11',
    price: 500
}

//Se estandarizan las opciones para calcualar tax
interface TaxCalculationOptions {
    tax: number,
    products: Product[]
}

//Funcion para calcular tax recibe como parametro las opciones y devuelve un arreglo de numeros
export function taxCalculation (options: TaxCalculationOptions):[number, number] {
    const {products, tax} = options;

    let total = 0;

    // estaba asi products.forEach( product ). Podemos acceder a las propiedades del product asi {} y usarlas por ejemplo {price} para acceder al precio
    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * tax ] 
}

//Se crea el carro de compras con todos los productos y el valor del taxes
const shoppingCart = [videogame, phone];
export const tax: number = 0.15;

const [total, taxes] = taxCalculation({
    products: shoppingCart,
    tax: tax
})



export {};