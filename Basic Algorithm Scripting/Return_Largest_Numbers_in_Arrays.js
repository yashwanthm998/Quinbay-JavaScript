function largestOfFour(arr) {
    var array=[];
    for(let i=0;i<arr.length;i++){
      let max=arr[i][0];
      for(let j=1;j<arr[i].length;j++){
        if(arr[i][j]>max){
          max=arr[i][j];
        }
      }
      array.push(max);
    }
    return array;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);