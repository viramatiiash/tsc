interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrial: () => string
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User { // there can be two and more interfaces with the same name. (reopening of the interface)
  githubToken: string;
}

interface Admin extends User { // interfaces can get all properties of the other interfaces
  role: 'admin' | 'ta' | 'lerner'
}

// interface Admin extends User, Another { // you can extend not only one interface
//   // interfaces can get all properties of the other interfaces
//   role: 'admin' | 'ta' | 'lerner';
// }

const vira: Admin = {
  dbId: 22,
  role: 'admin',
  email: 'v@gmail.com',
  userId: 2233,
  githubToken: 'github',
  startTrial: () => {
    return 'trail started';
  },
  getCoupon: (name: 'vira', off: 10) => {
    return 10;
  },
};

vira.email = 'vira@gmail.com';
// vira.dbId = 11; // not allowed
