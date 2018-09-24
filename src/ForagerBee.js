var ForagerBee = function(eat, color, age, job, canFly, treasureChest) {
    Grub.call(this, eat)

    Bee.call(this, color)
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];

};

ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.forage = function(treasure) {
    this.treasureChest.push(treasure);
}


ForagerBee.prototype.constructor = ForagerBee;