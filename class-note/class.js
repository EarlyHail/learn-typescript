function Person(name, age) {
  this.name = name;
  this.age = age;
}
const you = new Person("you", 30);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const me = new Person("EarlyHail", 30);
