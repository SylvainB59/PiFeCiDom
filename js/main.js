var startOne = document.getElementsByClassName("start")[0];
var startTwo = document.getElementsByClassName("start")[1];
var choix = ["Pierre", "Feuille", "Ciseaux"];

var sj = so = 0;
var og = "ORDI WIN > > >";
var jg = "< < < YOU WIN";
var eg = "> > > < < <"
var ordi;

// hide first part

function Start(){
  startOne.classList.add("hidden");
}


// hide second part

function StartPlay(){
  choosePlayerName();
  startTwo.classList.add("hidden");
  // playerChoice();
}


// save player name

function choosePlayerName(){
  var PlayerName = document.getElementById("pseudo").value;
  if (PlayerName == ""){
    PlayerName = "PLAYER 1";
  }
  else{
    PlayerName;
  }
  document.getElementById("playerName").innerHTML = PlayerName;
}


// player choice on click

function playerChoice(id){
  var choixJ = id.alt;
  console.log(choixJ);
  gameStart(choixJ);
}


function gameStart(x){
  var ordi = parseInt((Math.random()*300)/100);

  document.getElementById("imgJoueur").src = "img/PiFeCi_Joueur_"+choix[x]+".jpg";
  document.getElementById("imgOrdi").src = "img/PiFeCi_Ordi_"+choix[ordi]+".jpg";

  // --> x et ordi = 0/1/2
  // console.log(x, ordi);

  if( ((x==0)&&(ordi==1)) || ((x==1)&&(ordi==2)) || ((x==2)&&(ordi==0)) ){
    so++;
    document.getElementById("scoreOrdi").innerHTML = so;
    document.getElementById("tiret").innerHTML = og;
  }
  else if( ((x==0)&&(ordi==2)) || ((x==1)&&(ordi==0)) || ((x==2)&&(ordi==1)) ){
    sj++;
    document.getElementById("scorePlayer").innerHTML = sj;
    document.getElementById("tiret").innerHTML = jg;
  }
  else {
    document.getElementById("tiret").innerHTML = eg;
  }

  if((sj==3)||(so==3)){
    theEnd()
  }
}

function theEnd(){
  if(sj==3){
    document.getElementById("End").innerHTML = "YOU WIN";
  }
  else {
    document.getElementById("End").innerHTML = "YOU LOSE";
  }
  document.getElementById("finish").classList.remove("hidden");
}

function reset(){
  var sj = so = 0;
  document.getElementById("scoreOrdi").innerHTML = so;
  document.getElementById("scorePlayer").innerHTML = sj;
  document.getElementById("tiret").innerHTML = "-";
  document.getElementById("finish").classList.add("hidden");
  startTwo.classList.remove("hidden");
  startOne.classList.remove("hidden");
}
