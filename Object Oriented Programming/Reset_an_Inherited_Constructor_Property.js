function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

let duck = new Bird();
Bird.prototype.constructor = Bird;
duck.constructor

let beagle = new Dog();
Dog.prototype.constructor = Dog;
beagle.constructor