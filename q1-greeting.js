var readlineSync = require('readline-sync');
let name=readlineSync.question('Enter your full name : ');
function greetMessage(){
    return name
}
let id=greetMessage();
console.log("Hai,",id);
