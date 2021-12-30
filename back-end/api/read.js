const fs = require('fs');

const DATABASE = './database/db.json';

let getData = {
    get: function(resolve, reject){
        fs.readFile(DATABASE, 'utf-8', function(err, data){
            if(err){
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        })
    }
}

module.exports = getData;

