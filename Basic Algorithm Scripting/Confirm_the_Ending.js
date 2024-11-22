function confirmEnding(str, target) {
    var word=str.slice(-target.length);
    if(word === target){
      return true;
    }
    else{
      return false;
    }
  }
  
  confirmEnding("Bastian", "n");