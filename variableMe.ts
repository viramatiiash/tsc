let greetings: string = 'Hello Vira';

console.log(greetings);

// ! number
// let userId: number = 334455.3;
let userId = 334455.3;

// ! boolean
let isLoggedIn: boolean = false;

// ! any
let hero;

function getHero() {
  return 'thor';
}
hero = getHero(); // any

// ! use type
let hero1: string;

function getHero1() {
  return 'thor';
}
hero1 = getHero1(); // string

export {}
