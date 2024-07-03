//FUNCIONES.
function addNumbers(a: number, b: number) {
  return a + b;
}
//Parametros: el primero es obligatorio, el segundo es opcional, y el tercero es opcional y tiene 2 como default, todos son number.
function multiply( fisrtNumber: number, secondNumber?: number ,base: number = 2){
  return fisrtNumber * base;
}
//Devuelve el resultado de la suma en un string
const addNumbersArrow = (a: number, b: number): string => `${a + b}`;

//console.log(addNumbers(2,2), addNumbersArrow(2,3), multiply(2,undefined,3));

//Se estandariza el 'Character'
interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}
//Funcion para aumentar la vida, recibe el personaje y el monto de vida a subir.
const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
}
//Se define el personaje strider conforme el estandar creado
const strider: Character = {
  name: 'Strider',
  hp: 70,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`)
  },
}

//Se cura al personaje 20 puntos
healCharacter(strider, 20);
//Se muestra la vida del personaje ya aumentada
strider.showHp();

export {};
