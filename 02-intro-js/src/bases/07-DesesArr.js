// Desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks']

console.log(...personajes);

const [ , , p3 ] = personajes

console.log(p3)

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letaras, numeros] = retornaArreglo();

console.log( letaras, numeros)


const usestate = (valor) => [valor, () => console.log('Hellor world')]

const [value, setValue] = usestate('Hola');

console.log(value)
setValue();