
//prompt("What type of pokemon do you like?");
 
//var pc = prompt("What is your name");

//confirm("so your name is "+pc);
Game();

function Game(){
    document.write("Legend of the Cactus Dragon!");
    var playerName = prompt("What is your name?");
    alert("Welcome to the land of Drizdal"+ playerName);
    
    Prison();
    
    function Prison(){
        var prison = prompt("You wake up...Your head is pounding and you videion blurred. After pacing around walking off the headache your vision clears. It appears you are in prison and you cannot remember why. /n -look around /n -go back to sleep /n - taunt the guard").toLowerCase();
        
        if(prison == "look around" || prison == "look"){
            var prisonLook = prompt("The prison is small. dirtany and damp. A rat scurries into a hole in the corner. Bugs squirm and scamber underfoot. There is a barred window to teh bakc. An occupied bed a stanger alsleep snoring to the right. The cell bars and locked door to the front. An empty bed whihch you had sleeped in the night before to the right. In the center of the dirt floor is a lumpt moldy rug. /n -wake stranger /n move rug /-eat bugs");
        }
    
    else if(prison == "back to sleep" || prison == "sleep"){
        alert("You fall back to sleep in your dirty cot. You dream of distant lands and adventures");
        var resume = confirm("Do you wish to continue?");
        
        if(resume){
            Prison();
        }
            else{
                alert("Game Over!");
            }
        }    
    }
     function Swamp(){
        var swampEnv = prompt("This is a dank swamp. /n -follow path /n -swim");
        if(swampEnv == "follow") || swampEnv == ("follow path"){
            var swampPath = prompt("You enter on the swamp path and head north in the distance you see a swamp hut. As you approach you see a light burning inside. /n -enter hut /n -burn down hut");
        }
        if( swampPath = "enter"){
            alert("You enter the hut. There is an old hag bend over a black cauldron on the fire in the hearth");
        }
        else if(swampPath = "burn down hut"){
            alert("You burn down the hut...hope you feel good about yourself... Pyro!")
        }
        else{
            alert("don't throw rocks at hut...please!")
        }
        else if(SwampEnv == "Swim"){
        }
        else{
            alert("I don't understand"+swampEnv);
        }

}