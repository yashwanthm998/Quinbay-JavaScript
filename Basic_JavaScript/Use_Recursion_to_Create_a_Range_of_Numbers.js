function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
      return [startNum];
    }
    return [startNum].concat(rangeOfNumbers(startNum + 1, endNum));
  };