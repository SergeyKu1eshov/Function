// BEGIN
const humanReadableDate = (...dates) => {
    if (dates.length === 0) {
    return [];
    }
    return dates.map(date => new Date(date[0], date[1] - 1, date[2]).toDateString());
    };
    
    export default humanReadableDate;
    
    
// END