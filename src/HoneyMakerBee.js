var HoneyMakerBee = function(food, eat, color, age, job, honeypot) {

    Grub.call(this, food);
    Grub.call(this, eat);
    Bee.call(this, color);
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;

};

HoneyMakerBee.prototype = Object.create(Bee.prototype);


HoneyMakerBee.prototype.makeHoney = function() {
    this.honeyPot ++;
}

HoneyMakerBee.prototype.giveHoney = function() {
    this.honeyPot --;
}

HoneyMakerBee.prototype.constructor = HoneyMakerBee; 

