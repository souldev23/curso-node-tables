const {getMultiplicationTable} = require('./helpers/multiplication');
const {createTableFile, checkDir} = require('./helpers/file');
const args = require('./config/yargs');

require('colors');

const base = args.b, 
    limit = args.l, 
    directory = 'tables', 
    title = `Multiplication-table-${base}.txt`;

console.clear();

const table = getMultiplicationTable(limit, base, args.p);

checkDir(directory)
    .then(dir => {
        createTableFile(dir, title, table)
        .then(result => console.log(result.blue))
        .catch(err => console.log(err.red));
    }).catch(err => console.log(err.red));







