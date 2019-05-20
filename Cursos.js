let cursos = [
    { id: 1, nombre: 'Course 1', duracion: '3 semanas', valor: 234.33 },
    { id: 2, nombre: 'Course 2', duracion: '4 semanas', valor: 1000 },
    { id: 3, nombre: 'Course 3', duracion: '2 semanas', valor: 525 }
];

let text;

let mostrarCursos = (curso) => {
    for (var i in curso) {
        text = ((+i + 1) + ' - Nombre del curso: ' + curso[i].nombre + ', con una duracion de: ' + curso[i].duracion + ' y tiene un valor de: $' + curso[i].valor);
        mostrar(text, i);
    }
}

function mostrar(i, k) {
    setTimeout(function () {
        console.log(i);
    }, 2000 * (+k + 1));
}

mostrarCursos(cursos);

module.exports ={cursos,mostrarCursos};