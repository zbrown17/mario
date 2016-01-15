var monsters = [{
  name: "goomba",
  price: 5,
  caught: 12
}, {
  name: "bob-ombs",
  price: 7,
  caught: 8
}, {
  name: "cheep cheep",
  price: 11,
  caught: 5
}];

function math() {
  for (var i = 0; i < monsters.length; i++) {
    monsters[i]["owed"] = monsters[i].price * monsters[i].caught;
  }
}

function moreMath() {
  math();
  var total = 0;
  for (var i = 0; i < monsters.length; i++) {
    total = monsters[i].owed + total;
  }
  return total;

}
//console.log(moreMath());
//console.log(document)
window.onload = function (){
    
var a = document.getElementById('output');
console.log(a);
document.getElementById("output").innerHTML = moreMath()
}

