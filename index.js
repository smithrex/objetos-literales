var users = [{
    name: "Michael",
    last_name: "Zoto", 
    age:39
  }, {
    name: "John",
    last_name: "Enciso", 
    age:13
  }, {
    name: "Deyvi", 
    age:27
  }];


  //console.log(users);
  //console.log (users[1]["age"]);
  console.log(users[1]["name"], users[1]["age"] );
  console.log("-----------------");
  console.log(users[0]["name"]);
  console.log("-----------------");
  for(var i = 0; i < users.length; i++) {
    console.log(users[i]["name"],"-", users[i] ["age"]);
  }
  console.log("-----------------");
   for(var i = 0; i < users.length; i++) {
     if (users[i]["age"] > 18) {
       console.log(users[i]["name"],"-", users[i] ["age"])
     }
   }