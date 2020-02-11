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
  constructor(name, age, legs = 0, species="shark", status) {
    super(name);
    super(age);
    this.legs = legs;
    this.species = species;
    super(status);
  }
}

class Cat extends Animal {
  constructor(name, age, legs=4, species="Cat", status) {
    super(name);
    super(age);
    this.legs = legs;
    this.species = species;
    super(status);
  }
  introduce(){
    return super.introduce + "  " +"Meow meow!"
  }
}

class Dog extends Animal {
  constructor(name, age, legs=4, species="dog", status, master){
    super(name);
    super(age);
    this.legs = legs;
    this.species=species;
    this.status=status;
    this.master=master;
  }
  greetMaster(){
    return `Hello ${master}`
  }
}