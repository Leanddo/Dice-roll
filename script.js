function diceroll() {
  const dice = document.querySelectorAll(".dice");
  const value1 = document.getElementById("valor1");
  const value2 = document.getElementById("valor2");
  const playerp = document.getElementById("playerp");
  const playerspan = document.getElementById("playerspan");
  const values = [];

  dice.forEach(function (roll) {
    var randomnum = Math.floor(1 + Math.random() * 6);
    roll.src = `img/dice${randomnum}.svg`;
    roll.alt = `Value ${randomnum}`;

    values.push(randomnum);
  });

  value1.style.display="block";
  value2.style.display="block";
  playerp.style.display="block";
  
  value1.innerHTML=`Value ${values[0]}`;
  value2.innerHTML=`Value ${values[1]}`;

  if(values[0]>values[1]){
    playerspan.innerHTML='Player 1 won';
    playerspan.style.color="red";
  }else if(values[0]==values[1]){
    playerspan.innerHTML='Tie';
    playerspan.style.color="black";
    playerp.style.display='none';
  }
  else{
    playerspan.innerHTML='Player 2 won';
    playerspan.style.color="blue";
  }


}
