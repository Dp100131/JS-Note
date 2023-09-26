// Desestructuracción
// Asignación desestructurante
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    name: 'Daniel',
    edad: 21,
    clave: 'Iron man'
}

const { name: name2, edad, clave } = persona; 

console.log(name2);
console.log(edad);
console.log(clave);

const usecontext = ( {name, edad, clave, rango= 'Captain'} ) => {
    //console.log(name, edad, rango);   

    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 122,
            lng: 13
        }
    }

}

const {nombreClave, anios, latlng: {lat, lng}} = usecontext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);