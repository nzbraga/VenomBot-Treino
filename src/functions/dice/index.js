
function dice(n) {
    const min = 1;
    const max = n;
    const diceResult = Math.floor(Math.random() * (max - min + 1)) + min;
    return diceResult;
  }


