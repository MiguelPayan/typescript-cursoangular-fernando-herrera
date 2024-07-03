import { Product, tax, taxCalculation } from "./06-function-destructuring";

const shoppingCard: Product[] = [
    {
        description: 'Playera',
        price: 5
    },
    {
        description: 'Shorts',
        price: 5
    }
];

const [total, totalTax] = taxCalculation({
    tax: tax,
    products: shoppingCard
});

console.log('Total: ', total);
console.log('Tax: ', totalTax);