const c = require('./Cursos');

const opciones = {idCurso:{demand:true},
                   nombre:{demand:true},
                   cedula:{demand:true}}

const argv = require('yargs').command ('inscribir','Curso a incribirse',opciones)
.argv;

console.log(argv);

let infoCurso=c.cursos.find(dataCurso => dataCurso.id == argv.idCurso);
let text ='';

if(infoCurso===undefined)
{alert('El curso seleccionado no existe, por favor ingrese uno valido');}
else{
texto = 'Curso seleccionado: '+ ( infoCurso.id + ' - Nombre del curso: ' + infoCurso.nombre + ', con una duracion de: ' + infoCurso.duracion + ' y tiene un valor de: $' + infoCurso.valor+'\n');
texto = texto + ' Estudiante Inscrito: '+argv.nombre+' con cc.'+argv.cedula;
console.log(texto);
console.log('\n');
}
const inscripcionData = require('./crearArchivo');
inscripcionData.text = inscripcionData.text + texto;
inscripcionData.fs.writeFile('inscripciones.txt',inscripcionData.text,(err)=>{ if (err) throw (err);
    console.log('archivo creado exitosamente.');
    console.log('\n')});