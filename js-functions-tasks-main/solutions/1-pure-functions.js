// BEGIN
export default function sayPrimeOrNot (enteredNumber) {
    let numberOfDivisors = 0;
    for(let i = 1; i <= enteredNumber; i++) {
        if (enteredNumber % i == 0) {
            numberOfDivisors++;
        } else {
            continue;
        }
    }
    if (numberOfDivisors == 2) {
        console.log("yes");
    } else {
        console.log("no");
    }
} 
// END