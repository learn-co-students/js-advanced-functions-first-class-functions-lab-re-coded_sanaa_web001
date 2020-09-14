// Code your solution in this file!
const returnFirstTwoDrivers=function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers=function(drivers){
    return drivers.slice(-2);
}
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(val){
    return function(num){
        return num*val;
    }
}
const  fareDoubler=createFareMultiplier(2);
const fareTripler =createFareMultiplier(3);
function selectDifferentDrivers(draiversArray,fu){
return fu(draiversArray);
}

