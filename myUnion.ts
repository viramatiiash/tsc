let score: number | string = 33;

score = 44;

score = '55';


type User1 = {
  name: string;
  id: number;
}

type Admin = {
  username: string;
  id: number;
};

let vira: User1 | Admin = {
  name: 'vira',
  id: 334
}

vira = {
  username: 'v',
  id: 334
}

// function getDbId(id: number | string) {
//   // making some API calls
// console.log(`DB id is: ${id}`);
// }

getDbId('3');
getDbId(3);

function getDbId(id: number | string) {
  // id.toUpperCase();

  if (typeof id === 'string') {
    id.toUpperCase()
  }
  
}


// array
const data: number[] = [1, 2, 3]
const data1: string[] = ['1', '2', '3'];
const data2: (string | number)[] = ['1', '2', '3', 4];
// const data2: string[] | number[] = ['1', '2', '3', 4]; // ! not good

let pi: 3.14 = 3.14 // pi should have ONLY this value - 3.14

let seatAllotment: 'aisle' | 'middle' | 'window';

seatAllotment = 'middle';
