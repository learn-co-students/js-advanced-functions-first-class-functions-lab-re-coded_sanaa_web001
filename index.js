// Code your solution in this file!

const returnFirstTwoDrivers=function(drivers){
  drivers=[drivers[0],drivers[1]]
  return drivers
}
const returnLastTwoDrivers=function(drivers){
  drivers=[drivers[drivers.length-2],drivers[drivers.length-1]]
  return drivers
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier=function(n){
    return function(i){
      if(i){return i * n ;}
     return n * n ;
    }
  }
  const fareDoubler =(m) => {return createFareMultiplier(m)(2) };
 
  const fareTripler =(m) => {return createFareMultiplier(m)(3) };
  
  const selectDifferentDrivers=function(arrayOfDrivers,fun){

    return fun(arrayOfDrivers);
  
}
