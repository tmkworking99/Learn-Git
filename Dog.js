var chalk = require('chalk');

function Dog(name)
{
    this.Name = name; 
    this.stomach = [];
}

Dog.prototype.SayHi = function(){
    console.log('My name\'s ' + chalk.yellow(this.Name));
}

Dog.prototype.Eat = function(Cat)
{
	this.stomach.push(Cat);
}

module.exports =  Dog;