// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']) {
  return [drivers[0] , drivers[1]] ;
}

const returnLastTwoDrivers = function(drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']) {
  return [drivers[drivers.length - 2] , drivers[drivers.length - 1]] ;
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(mul) {
  return function (fare){
    return fare * mul ;
  }
}


const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function(drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'],func)
{
  return func(drivers);
}
