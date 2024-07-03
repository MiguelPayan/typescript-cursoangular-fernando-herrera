interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
 }

interface Details { 
    author: string;
    year: number;
 }

const audioPlayer: AudioPlayer = {
    audioVolume: 80,
    songDuration: 65,
    song: "Stressed Out",
    details:{
        author: "Twenty One Pilots",
        year: 2015
    }
}
//Obtener la propiedad dentro de un objeto. song:cancioncita cambia el nombre de la propiedad
const { song: anotherSong, songDuration:duration, details  } = audioPlayer;
const { author } = details;

/* console.log('Song: ', anotherSong );
console.log('Duration: ', duration );
console.log('Author: ', author ); */


const [ , , trunks]: string [] =  ['Goku', 'Vegeta', 'Trunks'];

console.error('Personaje 3: ', trunks);
export {};




