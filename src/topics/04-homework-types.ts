/*
    ===== Código de TypeScript =====
*/

interface Address {
    street: string;
    country: string;
    city: string;
}

//Cuando hay un objeto dentro de un objeto se debe crear un standar por separado para los objetos.
interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string; 
}


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};