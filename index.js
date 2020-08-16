// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function(drivers) {
  return [drivers[drivers.length -2], drivers[drivers.length-1]];
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(number) {
  return function(fare) {
    return number * fare;
  }
}

const fareDoubler = createFareMultiplier(2);
fareDoubler(2);

const fareTripler = createFareMultiplier(3);
fareTripler(10);

function selectDifferentDrivers(drivers, select) {
  return select(drivers);
}
