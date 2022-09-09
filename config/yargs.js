const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Base de la tabla de multiplicar'
  })
  .options("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: 'Muestra la tabla en consola'
  })
  .options("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    describe: 'Tope de la tabla de multiplicar'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "ERROR! the base must be a number";
    }
    return true;
  }).argv;


  module.exports = argv