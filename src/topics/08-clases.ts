export class Person {
    /*  */

    constructor(
        public name:string,
        private address:string = 'No address') 
        {}
}

/* export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName,'arg')
    }
} */

export class Hero{
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {}
}

const yahir = new Person('Yahir','Chihuahua')
const practicante = new Hero('Batman', 21, 'Many', yahir)

console.log(practicante );

