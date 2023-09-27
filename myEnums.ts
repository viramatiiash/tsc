// enum SeatChoice {
//   AISLE = 10,
//   MIDDLE,
//   WINDOW,
//   FOURTH
// }

const enum SeatChoice { // const doesn't generate to much code in js
  AISLE = 'aisle',
  MIDDLE = 'middle',
  WINDOW = 'window',
  FOURTH = 0,
}

const hcSeat = SeatChoice.AISLE;
