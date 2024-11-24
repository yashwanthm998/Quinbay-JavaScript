let username = "JackOfAllTrades";
let userCheck = /^[a-zA-Z]([a-zA-Z]+[0-9]*|[0-9]{2,})$/;
let result = userCheck.test(username);