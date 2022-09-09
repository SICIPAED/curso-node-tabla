const {createFile} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
let colors = require('colors');

console.clear();

//console.log('base yargs:', argv.base);

/* const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5] = arg3.split('=');
console.log(base); */

//let base = 8;

createFile(argv.base, argv.l, argv.h)
    .then(fileName => console.log(fileName.rainbow))
    .catch(err => console.log(err));

/* let salida = '';

console.log('***** Tabla del ',base, ' *****');

for(let i=1; i<=10; i++){
    salida += `${base} x ${i} = ${base*i}\n`;
    //console.log(`${base} x ${i} = ${base*i}`);
}

console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`, salida);

console.log(`tabla del ${base} creada`); */