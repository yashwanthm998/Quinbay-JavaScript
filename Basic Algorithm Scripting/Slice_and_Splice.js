function frankenSplice(arr1, arr2, n) {
    let result = arr2.slice();
    result.splice(n, 0, ...arr1);
    return result;
  }
frankenSplice([1, 2, 3], [4, 5, 6], 1);