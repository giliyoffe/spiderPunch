

// bug: every punch the setInterval becomes faster when returning the fist - eventualy u dont c the punch happening
 // face = document.getElementById("punchFace").src; //doesnt work
 // rightHand = document.getElementById("rightHand"); //doesnt work

document.getElementById("rightHand").addEventListener("click", function(){
	document.getElementById("rightHand").style.visibility = "hidden";
    document.getElementById("punchFace").src = "img/facePunchedRight.png";
    
    setInterval(function(){ 
    	document.getElementById("punchFace").src = "img/faceNotPunched.png";
		document.getElementById("rightHand").style.visibility = "visible";

     }, 200);
});