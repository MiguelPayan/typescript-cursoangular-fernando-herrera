//Decalrar un arreglo y el tipo de datos que va a contener tambien es posible.

//Este arreglo solo puede contener un arreglo de strings
const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['Bash', 'Counter'],
};

strider.hometown = 'Rivendell';

console.table(strider);
export {};
