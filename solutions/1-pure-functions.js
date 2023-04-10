// BEGIN
const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  const sayPrimeOrNot = (num) => {
    if (isPrime(num)) {
      console.log('yes');
    } else {
      console.log('no');
    }
  };
  
  export default sayPrimeOrNot;
// END