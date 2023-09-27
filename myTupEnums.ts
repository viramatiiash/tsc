// const user1: (string | number)[] = [1, 'vira']; // in the precise order - order of the data
let user1: [string, number, boolean];

user1 = ['vira', 122, true];


let rgb: [number, number, number] = [255, 123, 112];

type User2 = [number, string];

const newUser: User2 = [122, 'example@gmail.com'];

newUser[1] = 'fdsgsad';
newUser.push(true);