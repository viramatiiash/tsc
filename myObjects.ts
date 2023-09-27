// const User = {
//   name: 'vira',
//   email: 'vira@gmail.com',
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: 'vira', isPaid: false, email: 'vira@gmail.com' };

// createUser(newUser);


// function createCourse(): { name: string; price: number } {
//   return { name: 'matiiash', price: 455 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean
// }

// function createUser(user: User): User { // The second User says, that the functions should return User
// return { name: '', email: '', isActive: true };
// }

// createUser({name: '', email: '', isActive: true})

type User = {
  readonly _id: string; // nobody will be able to change that
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number
}

let myUser: User = {
  _id: '1234',
  name: 'v',
  email: 'v@gmail.com',
  isActive: false
}

type cardNumber = {
  cardnumber: string
}

type cardDate = {
  cardDate: string
}

// type cardDetails = cardNumber & cardDate; // good practice

type cardDetails = cardNumber & cardDate & {
  cvv: number; // not good practice
}


myUser.email = 'vira@gmail.com';
// myUser._id = 'assas'; // when we have readonly key word, then we can't change the value of this property


export {};
