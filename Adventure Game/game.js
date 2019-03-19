// Single line comment
/* 
Multiline comment
*/

// document.write("<h1>I can't wait for <em>spring!</em></h1>");



//alert("Warning! Will Robinson...Warning!");

//confirm("Do you like pokemon?");

//prompt("What type of pokemon do you like?");

var checkCoins = function(){
  alert("Gold Coins: "+player.inventory.coins.gold+"\n Silver Coins: "
        +player.inventory.coins.silver+"\n Copper Coins: "+player.inventory.coins.copper);
}

var inventory = {
  coins:100,
}
var enemy = {
  sword:0,
}

function GetRandint(max){
  var randInt = Math.floor(Math.random()* Math.floor(max));

  return randInt;
}

Game();

function Game(){

  var wizardNames = ["East Blue", "West BLue", "South Blue", "North Blue"];

  alert("Legend of "+wizardNames[Math.floor(Math.random()* 4)]+"!");

  var playerName = prompt("What is your name?");

  while(!confirm("Are you sure you want "+playerName+" as a name?")){
    playerName = prompt("What name do you want?");
  }

  alert("Welcome to the land of One Piece, "+ playerName);

  Prison();

  function Prison(){
    var prison = prompt("You woke up and you realized you are in a prison. \n -look \n - sleep \n ~OR GO TO~ \n swamp \n blacksmith \n house \n shop").toLowerCase();

    if(prison == "look around" || prison == "look"){
      var prisonLook = prompt("The prison is small with bugs squirming on the floor, there is a strange rug on the floor.  \n -move rug \n -eat bugs");
    }
    if(prisonLook == "move rug"  || prisonLook == "move"){
       alert("You moved the rug");
    var prisonMove = alert("there's nothing underneath the rug");
    Prison();
    }
    if(prisonLook == "eat bugs"  || prisonLook == "eat"){
      var prisonEat = alert("The Bugs are poisonous! You died!")

      }
    else if(prison == "go back to sleep" || prison == "sleep"){
      alert("You fell back to sleep in your bed.");
      var resume = confirm("Do you wish to continue?");

      if(resume){
        Prison();
      }

      else{
        alert("Game Over!");
      }
    }

    else if(prison == "swamp"){
      Swamp();
    }

    else if(prison == "blacksmith"){
      blacksmith();
    }

    else if(prison == "house"){
      House();
    }

    else if(prison == "shop"){
      Shop();
    }


    else{
      alert("I don't know what "+prison+" is!");
      Prison();
    }
  }

  function Swamp(){
    var swampEnv = prompt("You are at a swamp. \n -follow pathway \n -swim");

    if(swampEnv == "follow" || swampEnv == "follow pathway"){
      var swampPath = prompt("You followed the path, heading north and saw a swamp hut. \n -enter hut \n -burn hut");
      if( swampPath = "enter hut"){
        alert("You entered the hut.");
      var swampPath = alert("there's nothing valuable inside");
      Swamp();
      }
      else if(swampPath == "burn hut"){
        alert("You burned down the hut along with yourself");
      }	
      

    }
    else if(swampEnv == "swim"){
      alert("You got eaten by Crocodiles")
    }
    else{
      alert("I don't understand "+swampEnv); 
      Swamp();
    }


  }
  function blacksmith(){
    alert("The blacksmith")

    var blacksmith = prompt("What do you want to buy? /n - sword /n - shield \n -spear /n leave shop");
    if(blacksmith == "sword" || blacksmith == "buy sword" && inventory.coins >= 100){
      var swordBuy = confirm("Are you sure you want to buy this sword?");
      if(swordBuy){
        inventory.sword ++;
        alert("You own " +inventory.sword+" swords");
        inventory.coins = inventory.coins - 100;
        alert("You have "+inventory.coins+" coins remaining");
        Blacksmith();
      }
      else{
        alert("Have a nice day!");
        Blacksmith();
      }
    }
    else{
      alert("I don't know what "+blacksmith+" is!");
      Blacksmith();
    }
  }
  function House(){
    var insideHouse = prompt("You are in a house. -attic -basement -outside -downstair").toLowerCase();

    switch(insideHouse){
      case "attic" || "go to attic":
        var attic = prompt("there's nothing in the attic");

        House();
        break;
      case "basement":
        alert("you went to the basement");
        var basement = prompt("there's nothing in the basement");
        
        House();
        break;
      case "outside":
        alert("you went outside");
        var outside = prompt("there's nothing outside");
        
        House();
        break;
      case "downstair":
        alert("you went downstairs");
        var downstairs = prompt("there's nothing downstairs");
        House();
        break;
      default:
        alert("I don't know what "+insideHouse+"is");
        House();
        break;



                       }
  }

  function Shop(){
    var arrowsShop = 100;
    var arrowPrice = 1;

    var purchase = prompt("Welcome to the Shop, what would you like to buy? \n- Arrows:"+arrowsShop).toLowerCase();

    if(purchase == "arrows" || purchase == "arrow"){
      var arrowCon = prompt("How many arrows woud you like to purchase?");


      while(!confirm("Are you sure you want to purchase "+arrowCon+" arrows, for "+arrowPrice+" per arrow?")){
        arrowCon = prompt("How many arrows do you wish to buy?");
      }

      for(i = 1; i <= arrowCon; i++){
        inventory.arrows ++;
        console.log("You have "+inventory.arrows+"arrows");
      }
      alert("You have purchased "+arrowCon+" arrows. Thank you!");
      Shop();
    }
    else if(purchase == "exit"|| purchase == "leave"){
      Prison();
    }
    else{
      alert("I don't know what "+purchase+" is!");
      Shop();
    }

  }


}
