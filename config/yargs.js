const argv = require('yargs')
        .option('b',{
            alias: 'a',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar',

        })
        .option('l',{
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en la consola',

        })
        .option('h',{
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            default: 10,
            describe: 'Numero hasta cuanto se va a multiplicar',

        })
        .check((argv,options)=>{
            console.log('yargs', argv);
            if (isNaN(argv.b)){
                throw 'La base tiene que ser un numero'
            }
            return true
        })
        .argv

module.exports = argv;