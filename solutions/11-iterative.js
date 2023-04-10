import { divide } from "lodash";

const smallestDivisor = (num) => {
    // BEGIN
    let divisor = 2;
    if (num != 1) {
        if (num % divisor == 0) {
            return divisor;
        } else {
            while (num % divisor != 0) {
                divisor++;
            }
            return divisor;
        }
    } else {
        return num;
    }
    // END
  };
  
export default smallestDivisor;