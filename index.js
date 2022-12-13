const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// const totalBatteries = 0;
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue});
console.log(totalBatteries);

// let  totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue)
