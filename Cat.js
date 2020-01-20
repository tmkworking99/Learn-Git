var chalk = require('chalk');

function Cat(name)
{
	this.Name = name;
	this.stomach = [];
}

Cat.prototype.SayHi = function()
{
	console.log('I\'m a little Cat' + '.My name is ' +  chalk.red(this.Name.));
}

Cat.prototype.Eat = function(mouse)
{
	this.stomach.add(mouse);
}

module.exports = Cat;  