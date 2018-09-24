var RetiredForagerBee = function(food, eat, age, job, canFly, color, treasureChest) {
    ForagerBee.call(this)
    Grub.call(this, food);
    Grub.call(this, eat);
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
    this.treasureChest = [];

};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.gamble = function(treasure) {
    this.treasureChest.push(treasure); 
}

RetiredForagerBee.prototype.forage = function() {
    return 'I am too old, let me play cards instead';
}