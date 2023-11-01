let user = prompt("Enter S, W or G")
let comR = Math.floor(Math.random() * 3);
let com = ["S", "W", "G"][comR]

const match = (com, user)=>{
  if(com === user){
    return "Nobody"
  }
  else if(com === "S" && user==="W"){
    return "com"
  }
  else if(com === "S" && user==="G"){
    return "user"
  }
  else if(com === "G" && user==="W"){
    return "user"
  }
  else if(com === "G" && user==="S"){
    return "com"
  }
  else if(com === "W" && user==="S"){
    return "user"
  }
  else if(com === "W" && user==="G"){
    return "com"
  }
}
let result = match(com, user)
document.write(`Com:${com} <br> User:${user} <br>The winner is: ${result.toUpperCase()}` )