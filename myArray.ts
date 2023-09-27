const superHeroes: string[] = [];
// const heroPower: number[] = []; // ! These two way do exactly the same. It is the array of numbers
const heroPower: Array<number> = []; // !

type User = {
  name: string;
  isActive: boolean;
}

const allUsers: User[] = [];

const MLModels: number[][] = [ // number[][] - array of array with a number type
  [255, 255, 255],
  []
]

superHeroes.push('spiderman');
heroPower.push(2);

allUsers.push({name: '', isActive: true});