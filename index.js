// Code your solution in this file!
const returnFirstTwoDrivers= function(drivers){
    let firstTwoDrivers=[];
    firstTwoDrivers.push(drivers[0]);
    firstTwoDrivers.push(drivers[1]);
    return firstTwoDrivers;
}

const returnLastTwoDrivers=function(drivers){
    let lastTwoDrivers=[];
      for(let i= drivers.length-2 ; i < drivers.length; i++)
    {
        lastTwoDrivers.push(drivers[i])
    }
    return lastTwoDrivers;
  }

  const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(fare){
      return function(){
          return fare* fare;
      }
  }

  const fareDoubler= function(fare){
      
      return fare*2;
  }

  function createFareMultiplier(fare){
      return function() {
        return fare*fare;
      }
  }

  const fareTripler= function(fare){
      return fare*3;
  }

  function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
  }