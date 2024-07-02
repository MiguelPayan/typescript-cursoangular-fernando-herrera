const name = 'Strider';
//Asi se declara el tipo de dato, asi se puede poner que sera de uno u otro

//Tambien puedes decir que solo se podra usar un string en especifico.

let hpPoints: number | 'FULL' = 'FULL';

//No permite asignar numeros como 123 solo textos porque asi se le fue asignado

//name = '123';  no deja asignar un nuevo valor a una constante
console.log(hpPoints);
export {};
