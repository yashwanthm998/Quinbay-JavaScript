const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    let result = 0;
    for (let user in allUsers) {
      if (allUsers[user].online === true) {
        result++;
      }
    }
    return result;
  }
  
  console.log(countOnline(users));