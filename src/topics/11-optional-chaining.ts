export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Kenia"
}

const passenger2: Passenger = {
    name: "Guadalupe",
    children: ['Karely', 'Fanny']
}

const printChildren = (passenger: Passenger): number => {

    //children? SI EXISTE children dame el lenght.
    const howManyChildren = passenger.children?.length || 0;

    console.log(howManyChildren);
    return howManyChildren; 
}

printChildren(passenger1);