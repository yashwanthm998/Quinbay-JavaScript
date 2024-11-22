function repeatStringNumTimes(str, num) {
    var string="";
    if(num<0){
      string="";
    }
    else{
      for(let i=0;i<num;i++)
        string+=str;
    }
    return string;
  }
  
  repeatStringNumTimes("abc", 3);