// enum SeatChoice {
//   AISLE = 10,
//   MIDDLE,
//   WINDOW,
//   FOURTH
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice["MIDDLE"] = "middle";
    SeatChoice["WINDOW"] = "window";
    SeatChoice[SeatChoice["FOURTH"] = 0] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
