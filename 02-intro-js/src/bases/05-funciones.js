function saludar(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar4 = (nombre) => `Hola, ${nombre}`;

console.log(saludar('Daniel'));
console.log(saludar3);
console.log(saludar4('alv'));