function findLongestWordLength(str) {
    var word=str.split(' ');
    var max=0;
    var len;
    for(let i=0;i<word.length;i++){
      len=word[i].length;
      if(len>max){
        max=len;
      }
    }
    return max;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");