function makeMove(value){
	if(value=="TopLeft"){
		if(document.getElementById('TopLeft').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('TopLeft').value="X";
			changeTurn();
		}
		else if(document.getElementById('TopLeft').value==""){
			document.getElementById('TopLeft').value="O";
			changeTurn();
		}
	}
	else if(value=="TopMiddle"){
		if((document.getElementById('TopMiddle').value=="") && (document.getElementById('TurnIndicator').innerHTML=="X's Turn")){
			document.getElementById('TopMiddle').value="X";
			changeTurn();
		}
		else if(document.getElementById('TopMiddle').value==""){
			document.getElementById('TopMiddle').value="O";
			changeTurn();
		}
	}
	else if(value=="TopRight"){
		if(document.getElementById('TopRight').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('TopRight').value="X";
			changeTurn();
		}
		else if(document.getElementById('TopRight').value==""){
			document.getElementById('TopRight').value="O";
			changeTurn();
		}
	}
	if(value=="MiddleLeft"){
		if(document.getElementById('MiddleLeft').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('MiddleLeft').value="X";
			changeTurn();
		}
		else if(document.getElementById('MiddleLeft').value==""){
			document.getElementById('MiddleLeft').value="O";
			changeTurn();
		}
	}
	if(value=="MiddleMiddle"){
		if(document.getElementById('MiddleMiddle').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('MiddleMiddle').value="X";
			changeTurn();
		}
		else if(document.getElementById('MiddleMiddle').value==""){
			document.getElementById('MiddleMiddle').value="O";
			changeTurn();
		}
	}
	if(value=="MiddleRight"){
		if(document.getElementById('MiddleRight').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('MiddleRight').value="X";
			changeTurn();
		}
		else if(document.getElementById('MiddleRight').value==""){
			document.getElementById('MiddleRight').value="O";
			changeTurn();
		}
	}
	if(value=="BottomLeft"){
		if(document.getElementById('BottomLeft').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('BottomLeft').value="X";
			changeTurn();
		}
		else if(document.getElementById('BottomLeft').value==""){
			document.getElementById('BottomLeft').value="O";
			changeTurn();
		}
	}
	if(value=="BottomMiddle"){
		if(document.getElementById('BottomMiddle').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('BottomMiddle').value="X";
			changeTurn();
		}
		else if(document.getElementById('BottomMiddle').value==""){
			document.getElementById('BottomMiddle').value="O";
			changeTurn();
		}
	}
	if(value=="BottomRight"){
		if(document.getElementById('BottomRight').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('BottomRight').value="X";
			changeTurn();
		}
		else if(document.getElementById('BottomRight').value==""){
			document.getElementById('BottomRight').value="O";
			changeTurn();
		}
	}
	checkForWin();
}

function changeTurn(){
		if(document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('TurnIndicator').innerHTML="O's Turn";
		}
		else{
			document.getElementById('TurnIndicator').innerHTML="X's Turn";
		}
}

function checkForWin(){
	var TL = document.getElementById('TopLeft').value;
	var TM = document.getElementById('TopMiddle').value;
	var TR = document.getElementById('TopRight').value;
	var ML = document.getElementById('MiddleLeft').value;
	var MM = document.getElementById('MiddleMiddle').value;
	var MR = document.getElementById('MiddleRight').value;
	var BL = document.getElementById('BottomLeft').value;
	var BM = document.getElementById('BottomMiddle').value;;
	var BR = document.getElementById('BottomRight').value;

/*	if((TL=="X" && TM=="X" && TR=="X") || (ML=="X" && "MM="X" && MR=="X") || (BL=="X" && BM=="X" BR=="X") || (TL=="X" && ML=="X" && BL=="X") || (TM=="X" && MM=="X" && BM=="X") || (TR=="X" && MR=="X" && BR=="X") || (TL=="X" && MM=="X" && BR=="X") || (TR=="X" && MM=="X" && BL=="X")){
	document.getElementByID('TurnIndicator').innerHTML="X WINS!!!";
}*/
}
