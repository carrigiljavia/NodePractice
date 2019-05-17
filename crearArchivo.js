
let fs = require('fs');

var text = 'Bienvenido a esta primera prueba';

fs.writeFile('inscripciones.txt',text,(err)=>{ if (err) throw (err);
console.log('archivo creado exitosamente.')});