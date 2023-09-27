function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => { };

function getValue(myVal: number) {
  if (myVal > 5) {
    return true;
  }
  return '200 OK';
}

const getHello = (s: string): string => { // Arrow functions need to return smth. It could be even an empty string
return ''
}

const heroes = ['thor', 'spiderman', 'ironman'];
// const heroes = [1, 2, 3];

heroes.map((hero): string => {
  return `hero is ${hero}`;
})

function consoleError(errmsg: string): void { // void - function returns anything
  console.log(errmsg);
  
}

function handleError(errmsg: string): never { // a function never returns a value
  throw new Error(errmsg);
}

addTwo(2);
getUpper('vira');
signUpUser('vira', 'vira@gmail.com', false);
loginUser('v', 'v@v.com');
