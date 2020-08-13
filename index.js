// Code your solution in this file!
const returnFirstTwoDrivers=function(drivers){
  drivers=[drivers[0],drivers[1]]
  return drivers
}
const returnLastTwoDrivers=function(drivers){
  drivers=[drivers[drivers.length-2],drivers[drivers.length-1]]
  return drivers
}
let drivers=["4","5","6"]
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier=function(integer){
  return function(){
   return integer*integer;
  }
}
const fareDoubler=function(integer){
   return (createFareMultiplier(integer)()/integer)+integer;
}

const fareTripler=function(integer){
   return (createFareMultiplier(integer)()/integer)+integer+integer;
}

const selectDifferentDrivers=function(arrayOfDrivers,fun){
  if(fun===returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
  }
  else if(fun===returnLastTwoDrivers){
    return returnLastTwoDrivers(arrayOfDrivers);
  }
}