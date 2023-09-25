const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New york',
        zip: 23423423423,
        lat: 234234234,
        lng: 34.2323423
    }
};



//console.table( persona );
console.log( persona );

const persona2 = persona;

persona2.nombre = 'peter';

console.log(persona)
console.log(persona2)

const persona3 = {...persona, nombre: 'Daniel'};

console.log(persona)
console.log(persona3)