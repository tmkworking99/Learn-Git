var chalk = require('chalk');

function Dog(name)
{
    this.Name = name; 
}

Dog.prototype.SayHi = function(){
    console.log('My name\'s ' + chalk.yellow(this.Name));
}

module.exports =  Dog;