const args = require('yargs')
            .options({
                'b': {
                    alias: 'base',
                    demandOption: true,
                    type: 'number'
                },
                'l': {
                    alias: 'limit',
                    demandOption: false,
                    default: 10,
                    type: 'number'
                },
                'p': {
                    alias: 'print',
                    demandOption: false,
                    default: false,
                    type: 'boolean',
                    describe: 'If the option p is present the result is printed on the console'
                }
            })
            .check((args, options) => {
                if(isNaN(args.b)){
                    throw 'Argument base (b) must be a number';
                }                
                if(isNaN(args.l)){
                    throw 'Argument limit (l) must be a number';
                }                                                 
                return true;
            })
            .argv;

module.exports = args;