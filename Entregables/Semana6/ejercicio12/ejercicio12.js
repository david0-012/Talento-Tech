// 12. Utilizar una biblioteca como Moment.js para realizar operaciones con fechas y horas.

const moment = require('moment');
require('moment/locale/es'); // Importar el idioma español
moment.locale('es'); // Configurar moment para usar el idioma español

// Obtener la fecha y hora actual
let fechaActual = moment();
console.log("Fecha y hora actual:", fechaActual.format('MMMM Do YYYY, h:mm:ss a'));

// Sumar y restar tiempo
let fechaMasUnaSemana = fechaActual.clone().add(1, 'weeks');
let fechaMenosUnMes = fechaActual.clone().subtract(1, 'months');
console.log("Fecha más una semana:", fechaMasUnaSemana.format('MMMM Do YYYY, h:mm:ss a'));
console.log("Fecha menos un mes:", fechaMenosUnMes.format('MMMM Do YYYY, h:mm:ss a'));

// Diferencia entre fechas
let fechaInicio = moment('2023-01-01');
let fechaFin = moment('2023-12-31');
let diferenciaDias = fechaFin.diff(fechaInicio, 'days');
console.log("Diferencia en días:", diferenciaDias);

// Formatear fechas
let fechaFormateada = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
console.log("Fecha formateada:", fechaFormateada);

// Parsear fechas
let fechaParseada = moment('2023-10-05', 'YYYY-MM-DD');
console.log("Fecha parseada:", fechaParseada.format('MMMM Do YYYY'));

// Validar fechas
let fechaValida = moment('2023-02-29', 'YYYY-MM-DD', true).isValid();
console.log("¿Es una fecha válida?", fechaValida);