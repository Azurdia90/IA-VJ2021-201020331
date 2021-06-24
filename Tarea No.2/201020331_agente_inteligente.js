// MIT License
// Copyright (c) 2020 Luis Espino

var estado= 1;

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function test(states){
         
         var ciclo = true;

         
         //revisión que los 8 estados se hayan cumplido
         if (states[1]=="CLEAN" && states[2]=="CLEAN" && estado > 7){

            ciclo = false;
         }
         else if(states[1]=="CLEAN" && states[2]=="CLEAN" && estado == 4)
         {
            states[1]="DIRTY";
         }
         else if(states[1]=="CLEAN" && states[2]=="CLEAN" && estado == 6){
            states[2]="DIRTY"
         }
         else if(states[1]=="CLEAN" && states[2]=="DIRTY" && estado == 7){
            states[1]="DIRTY"
         }

      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
         //document.getElementById("log").innerHTML+="<br>Estado: ".concat(estado).concat(" | A: ").concat(states[1]).concat(" | B: ").concat(states[2]);
      	document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
      	if (action_result == "CLEAN"){
        	   if (location == "A") states[1] = "CLEAN";
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";	

         estado = estado + 1;

   //Si el ciclo se cumple se termina la ejecución
	if(ciclo){
      setTimeout(function(){ test(states) }, 3000);
   }
   else{
      document.getElementById("log").innerHTML+="<br>Visito los 8 estados";
   }
}

//posicion 0: posicion(habitación)
//posicion 1: estado de la habitación A
//posicion 2: estado de la habitación B
var states = ["A","DIRTY","DIRTY"];
test(states);