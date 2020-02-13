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

// ## I. Shark
// The constructor function for Shark should accept 3 arguments in total in the following order: `name, age, status`. All sharks should have a leg count of `0`,(since they obviously do not have any legs) and should have a `species` of ` "shark" `.

class Shark extends Animal {
  constructor(name, age, status) {
    this.name = name;
    this.age = age;
    this.legs = 0;
    this.species = shark;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

let shark = new Shark("jaws", 1000, "hungry");

// ## II. Cat

// The constructor function for Cat should accept the same 3 arguments as with Shark: `name, age, status`. Cats should always have a leg count of `4` and a species of `"cat"`.

// Furthermore, the `introduce`/`Introduce` method for `Cat` should be identical to the original except there should be exactly 2 spaces and the words `"Meow meow!"` after the phrase. For example:

//     var example = new Cat("Example", 10, "Happy");
//     example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important
class Cat extends Animal {
  constructor(name, age, status) {
    this.name = name;
    this.age = age;
    this.legs = 4;
    this.species = cat;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

let cat = new Cat("alexander", 16, "chillin");

// ## III. Dog

// The Dog constructor should accept 4 arguments in the specified order: `name, age, status, master`. `master` is the name of the dog's master which will be a string. Furthermore, dogs should have `4` legs and a species of `"dog"`.

// Dogs have an identical `introduce`/`Introduce` method as any other animal, but they have their own method called `greetMaster`/`GreetMaster` which accepts no arguments and returns `"Hello (insert_master_name_here)"` (of course **not** the literal string but replace the `(insert_master_name_here)` with the name of the dog's master).

class Dog extends Animal {
  constructor(name, age, status, master) {
    this.name = name;
    this.age = age;
    this.legs = 4;
    this.species = cat;
    this.status = status;
    this.master = this.master;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}

let dog = new Dog("Pup", 3, "hyper", "Rafid");
