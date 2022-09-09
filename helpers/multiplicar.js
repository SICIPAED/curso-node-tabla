const fs = require("fs");
let colors = require('colors');

const createFile = async (base = 8, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }
    if(listar){
      console.log("***** Tabla del ".green, colors.blue(base), " *****".green);
      console.log(consola);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    //console.log(`tabla del ${base} creada`);
    return `tabla del ${base} creada..`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFile,
};
