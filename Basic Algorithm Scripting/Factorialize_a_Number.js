function factorialize(num) {
    var fact=1;
    for(let i=1;i<=num;i++){
      fact*=i;
    }
    return fact;
  }
  
  factorialize(5);