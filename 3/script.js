async function getusersdata(){
  let response =  await fetch("https://jsonplaceholder.typicode.com/users")
  let users =  await response.json();
  console.log(users);
//   document.writeln(users);
   let output = JSON.stringify(users[0]);
   document.writeln(output);
}

getusersdata()