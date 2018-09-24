/*
Strategy:
Need to create
*/

var Bee = function(food, age, color, job) {
    //this call needs to go first or else it will overwrite
    Grub.call(this, food);
    this.age = 5;
    this.color = 'yellow';
    this.job = 'keep on growing';
};


Bee.prototype = Object.create(Grub.prototype);

//The line below sets the constructor to = Bee, so if you check what constructor made the obj
//it will properly return Bee as the constructor
Bee.prototype.constructor = Bee;
