const fs = require('fs');
/**
 * 
 * @param {String} directory 
 * @param {String} fileName 
 * @param {String} content 
 * @returns {Promise}
 */
const createTableFile = (directory, fileName, content) => {
    
    const ctPromise = new Promise((resolve, reject) => {        
        fs.writeFile(`${directory}/${fileName}`, content, (err) => {
            (err)
                ? reject(err)                
                : resolve(`${fileName} has been created`);
        });
    });
    return ctPromise;
};

const checkDir = (dir) => {
    return new Promise((resolve, reject) => {
        if(!fs.existsSync(dir))
        {
            console.log("Directory doesn't exists");
            try{
                fs.mkdir(dir, () => console.log(`Directory ${dir} has been created`));
                resolve(dir);
            }
            catch (err){
                console.log(err);
                reject(err);
            }            
        }else
            resolve(dir);
    });
};

module.exports = {
    createTableFile,
    checkDir
}