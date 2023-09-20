
const colors = require('colors')
/**
 * 
 * @param {Number} f1 
 * @param {Number} f2 
 * @returns {Number}
 */
const getProduct = (f1, f2) => f1 * f2;

/**
 * 
 * @param {Number} limit
 * @param {Number} number
 * @param {Boolean} print
 * @returns {String}
 */
const getMultiplicationTable = (limit, number, print) => {
    let counter = 0;
    let table = `===========================
        Tabla del ${number}        
===========================\n`;
    let output = colors.bgCyan(`===========================
        Tabla del ${number}        
===========================\n`);
    do{
        counter++;
        output += colors.cyan(`\t${number} ${'x'.white} ${counter} ${'='.white} ${getProduct(counter, number)} \n`);
        table += `\t${number} x ${counter} = ${getProduct(counter, number)} \n`;
    }while(counter < limit);
    if(print) console.log(output);    
    return table;
};

module.exports = {
    getMultiplicationTable
}