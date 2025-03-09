const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    converted_str = "";
    
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) < 97) {
            converted_str += str[i].toLowerCase();
        } else {
            converted_str += str[i].toUpperCase();
        }
    }
    
    console.log(converted_str);
});