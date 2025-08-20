// Method
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //method
  say() {
    return 'Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.';
  }
}

var person1 = new Person('Alice', 30);
console.log(person1.say()); // Output: Hello, my name is Alice and I am 30 years old.
