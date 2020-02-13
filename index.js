class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal { 
  constructor(name, age, status) {
  this.name = name;
  this.age = age;
  this.status = status;
  this.legs = 0;
  this.species = "shark"; 
  } 
}

class Cat extends Animal {
  constructor (name, age, status) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = "cat"
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow Meow!`
  }
}

class Dog extends Animal {
  constructor (name, age, status, master) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.master = master;
    this.legs = 4;
    this.species = "dog";
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }
  greetMaster() {
    return `Hello ${this.master}`
  }
}