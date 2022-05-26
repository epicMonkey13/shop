// hamburger
const hamburgerIcon = document.querySelector('#nav-toggle-button');
const navItems = document.querySelector('#nav-items');
hamburgerIcon.addEventListener('click', () => {
  navItems.classList.toggle('active');
});
// end of hamburger
// shopping list
const list = document.querySelector('#shopping-list');
const input = document.querySelector('#item');
const button = document.querySelector('#adding-button');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');
  listBtn.style.backgroundColor = 'gray';
  listBtn.style.margin = '1rem';
  listBtn.style.padding = '0.5rem';
  listBtn.style.borderRadius = '0.5rem';
  listItem.style.margin = '0.5rem'

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});
// end of shopping list
// mon lesson
const spaceCraft = {
model: "dff",
range: 500,
capacity: 258,
};

const keys = Object.keys(spaceCraft);
console.log(keys);

//classes constructor example
class Car {
  //optional
  constructor(name,year, color){
    // console.log(this);
    console.log("constructor ran");
    this.carName = name;
    this.manifYear = year;
    this.carColor = color;
  }
}
//new instance - creating an entity from the blueprint 
const myCar1 = new Car("Ford", 2014, "red");
console.log(myCar1);
console.log(myCar1.carName);

const myCar2 = new Car("bmw", 2021, "black");
console.log(myCar2);
console.log(myCar1 === myCar2);

//adding methods inside the class
class Car2{
  constructor(name,year){
    this.name = name;
    this.year = year; //car2.year = year
  }
  age(){
    let date = new Date();
    return date.getFullYear() - this.year;
  }
  upperName(){
    return this.name.toUpperCase();
  }
}
const myCar3 = new Car2("bmw", 2021, "black");
console.log(myCar3);
console.log(myCar3.age());
console.log(myCar3.upperName());

//getters and setters
class Square{
  constructor(_width){
    this.width = _width;
    this.height = _width;
  }

  //getter
  get area(){
    return(this.width  = this.height);
  }

  //setter sets the value
  set area(area){
    this.width = Math.sqrt(area);
    this.height = this.width
  }
}

let square = new Square(10);
console.log(square.height);
console.log(square.width);
console.log(square);
square.area = 64; //h = 8 and w = 8
console.log(square.height);
console.log(square.width);

//extends 

//concept of inheritance
//4 legs
//live in the wild
// herivore / carnivore
//one class can inherit another class

// class 2 inherits class 1 then class 2 will access everything in class 1 and have its own unique methods

class Animal{
  constructor(name){
    console.log("con anim called");
    this.name = name;
  }
  speak(){
    console.log(`${this.name} makes a noise`);
  }
}
// dog inherits animal class
class Dog extends Animal{
  constructor(name){
    super(name); //call the constructor func from parent class
  }

  sound(){
    console.log(`${this.name} barks`);
  }
}
let d = new Dog("Mitzie");
d.sound();

//destructuring and the spread operator
const shoppingBill = [5, 17.5, 12];
const newItemsBill = [3, 7, 8];

function sum (a, b, c){
  return a + b + c; 
}
console.log(sum(shoppingBill[0], shoppingBill[1], shoppingBill[2]));

console.log(...shoppingBill);
console.log(sum(...shoppingBill));

//adding arrays
const totalBill = [...shoppingBill, ...newItemsBill];
console.log(totalBill);

//copy of an array
const newShoppingBill = [...shoppingBill];
console.log("backup", newShoppingBill);
console.log(newShoppingBill ===  shoppingBill);

//by ref vs by value example
const newItemsBill2 = shoppingBill;
newItemsBill2.push(177);
console.log(newItemsBill2);
console.log(shoppingBill);

//objects spread combines 2 objects
let obj1 = {firstname:"John"};
let obj2 = {lastname:"Smith"};

console.log({...obj1, ...obj2});
console.log({...obj1, age: 12});

//destr-g
const hero = {
  charName: "Batman",
  realName: "Bryce WAyne",
  dob: new Date("1915-04-17"),
  mobile: "19150417",
  address: "Lala",
};

//standard way to assign props to new vars
console.log(hero.charName);

//less code
const { charName,address } = hero;
console.log(charName, address);

//exercises
class User {
  constructor(firstName,lastName){
    console.log("constructor ran");
    this.userName = firstName;
    this.userLastName = lastName;
  }
  greet(){
    console.log(`welcome ${this.userName} ${this.userLastName}`);
  }
}

const newUser = new User("Gulmira", "Z");
newUser.greet();
//end of ex 1

//ex 2
// below didn't work
// class Admin extends User {
//   constructor(userName){
//     super(userName);
//   }
  
//   checkIfAdmin(){
//     if (this.userName = newUser){
//       console.log("Gulmira is admin, true");
//     } else {
//       console.log("you are not admin");
//     }
//   }
  
// };

// let randomUser = new Admin ("Jane", "D");
// randomUser.checkIfAdmin(); 

//ex2 attempt 2
class Drink {
  constructor(brand) {
    this.drinkName = brand;
  }
  present() {
    return 'ex 2. I have a ' + this.drinkName;
  }
}

class Cocktail extends Drink {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is ' + this.model;
  }
}

let myDrink = new Cocktail("Martini", "Rosso");
document.querySelector("#demo").innerHTML = myDrink.show();
//end of ex2 attempt 2





