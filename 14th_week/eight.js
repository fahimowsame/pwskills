
const startDate = '01-01-2024';
const endDaate = '02-01-2024'

function calculateRemainingDays(date1, date2){
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    const oneDay = 24 * 60 * 60 * 1000;
    

    const differnceInTime = Math.abs(firstDate - secondDate);
    const differnceInDate = Math.round(differnceInTime / oneDay);

    return differnceInDate;


}

const diffinDate = calculateRemainingDays(startDate, endDaate);
console.log(diffinDate)