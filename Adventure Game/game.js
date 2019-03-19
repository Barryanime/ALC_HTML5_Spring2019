// Single line comment
/* 
Multiline comment
*/

// document.write("<h1>I can't wait for <em>spring!</em></h1>");



//alert("Warning! Will Robinson...Warning!");

//confirm("Do you like pokemon?");

//prompt("What type of pokemon do you like?");

    // Javascript Object for an inventory

//check coins expression. To check the expression call just like a function ex. checkCoins();
    var checkCoins = function(){
        alert("Gold Coins: "+player.inventory.coins.gold+"\n Silver Coins: "
        +player.inventory.coins.silver+"\n Copper Coins: "+player.inventory.coins.copper);
    }

    var inventory = {
        coins:100,
        bread:1,
        sword:0,
        map:0,
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
	
	alert("Welcome to the land of One Piece "+ playerName);
	
	Prison();
	
	function Prison(){
		var prison = prompt("You woke up and you realized you are in prison. \n -look around \n - go back to sleep").toLowerCase();
        
		if(prison == "look around" || prison == "look"){
			var prisonLook = prompt("The prison is small with bugs squirming on the floor, there is a strange rug on the floor.  \n -move rug \n -eat bugs");
            }
        if(prisonLook == "move rug"  || prisonLook == "move"){
                var prisonMove = alert("There's nothing beneath the rug");
                var prisonLook = prompt("The prison is small with bugs squirming on the floor, there is a strange rug on the floor.  \n -move rug \n -eat bugs");
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
        
        else if(prison == "castle"){
			Castle();
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
		var swampEnv = prompt("You are in a swamp swamp. \n -follow path \n -swim");
		
		if(swampEnv == "follow" || swampEnv == "follow path"){
			var swampPath = prompt("You followed the path, heading north. You saw a swamp hut. \n -enter hut \n -burn down hut");
			if( swampPath = "enter"){
				alert("You entered the hut. There's nothing valuable inside");
			}	
			else if(swampPath = "burn down hut"){
				alert("You burned down the hut along with yourself");
			}	
			else{
				alert("dont throw rocks at hut...please!"); 
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
        
            var blacksmith = prompt("What do you want to buy? /n - sword /n - shield /n - armor /n leave shop");
                if(blacksmith == "sword" || blacksmith == "buy sword" && inventory.coins >= 100){
                    var swordBuy = confirm("Are you sure you want to buy this sword?");
                        if(swordBuy){
                            //Adds sword +1
                            inventory.sword ++;
                            //displays swords owned
                            alert("You own " +inventory.sword+" swords");
                            // Takes money out of accound for sword
                            inventory.coins = inventory.coins - 100;
                            //displays coins left in account
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
        function Castle(){
            var insideCastle = prompt("-attic -downstairs -courtyard -balcony -look").toLowerCase();
            
            switch(insideCastle){
                case "attic" || "go to attic":
                var upstairs = prompt("there's nothing in the attic");
                    
                Castle();
                break;
                case "basement":
                    alert("you went to the basement");
                    
                break;
                case "outside":
                    alert("you went outside");
                    Castle();
                break;
                case "balcony":
                    alert("you go to balcony");
                    Castle();
                break;
                default:
                    alert("I don't know what "+insideCastle+"is");
                    Castle();
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
