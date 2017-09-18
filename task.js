/**
 * Created by Anna on 13.09.2017.
 */
let directory = process.argv[2];
let script = "";
const fs = require('fs');
const path = require('path');

if(directory){
    fs.stat(directory, function(error, pathDir) {
        if(error || !(pathDir.isDirectory())){
            console.log('Неверный путь')
        }
        else{
            fs.readFile('summary.txt', function(error, data) {
                if (error) {
                    console.error('Ошибка');
                } else {
                    script =  data.toString();
                    script = script.replace('flag', directory + '/');

                    fs.writeFile(`${directory}\\summary.js`, script, function (error)
                    {
                        if(error){
                            console.log('Ошибка при создании файла');
                        }
                    })
                }
            });

        }
    });
}
else {
    console.log('Введите путь к директории');
}


