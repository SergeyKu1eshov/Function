const run = (text) => {
    // BEGIN
    function takeLast(string, n) {
      if (string == '' || string.length < n) {
        return null;
      } else {
        let reverse = string.split('').reverse().join('');
        return reverse.slice(0, n);
      }
    }
    // END
  
    return takeLast(text, 4);
  };
  
export default run;