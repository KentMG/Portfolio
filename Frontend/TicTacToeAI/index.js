function makeMove(value){
	if(value=="TopLeft"){
		if(document.getElementById('TopLeft').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('TopLeft').value="X";
			changeTurn();
		}
		else if(document.getElementById('TopLeft').value=="" && document.getElementById('TurnIndicator').innerHTML=="O's Turn"){
			document.getElementById('TopLeft').value="O";
			changeTurn();
		}
	}
	else if(value=="TopMiddle"){
		if(document.getElementById('TopMiddle').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('TopMiddle').value="X";
			changeTurn();
		}
		else if(document.getElementById('TopMiddle').value=="" && document.getElementById('TurnIndicator').innerHTML=="O's Turn"){
			document.getElementById('TopMiddle').value="O";
			changeTurn();
		}
	}
	else if(value=="TopRight"){
		if(document.getElementById('TopRight').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('TopRight').value="X";
			changeTurn();
		}
		else if(document.getElementById('TopRight').value=="" && document.getElementById('TurnIndicator').innerHTML=="O's Turn"){
			document.getElementById('TopRight').value="O";
			changeTurn();
		}
	}
	if(value=="MiddleLeft"){
		if(document.getElementById('MiddleLeft').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('MiddleLeft').value="X";
			changeTurn();
		}
		else if(document.getElementById('MiddleLeft').value=="" && document.getElementById('TurnIndicator').innerHTML=="O's Turn"){
			document.getElementById('MiddleLeft').value="O";
			changeTurn();
		}
	}
	if(value=="MiddleMiddle"){
		if(document.getElementById('MiddleMiddle').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('MiddleMiddle').value="X";
			changeTurn();
		}
		else if(document.getElementById('MiddleMiddle').value=="" && document.getElementById('TurnIndicator').innerHTML=="O's Turn"){
			document.getElementById('MiddleMiddle').value="O";
			changeTurn();
		}
	}
	if(value=="MiddleRight"){
		if(document.getElementById('MiddleRight').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('MiddleRight').value="X";
			changeTurn();
		}
		else if(document.getElementById('MiddleRight').value=="" && document.getElementById('TurnIndicator').innerHTML=="O's Turn"){
			document.getElementById('MiddleRight').value="O";
			changeTurn();
		}
	}
	if(value=="BottomLeft"){
		if(document.getElementById('BottomLeft').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('BottomLeft').value="X";
			changeTurn();
		}
		else if(document.getElementById('BottomLeft').value=="" && document.getElementById('TurnIndicator').innerHTML=="O's Turn"){
			document.getElementById('BottomLeft').value="O";
			changeTurn();
		}
	}
	if(value=="BottomMiddle"){
		if(document.getElementById('BottomMiddle').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('BottomMiddle').value="X";
			changeTurn();
		}
		else if(document.getElementById('BottomMiddle').value=="" && document.getElementById('TurnIndicator').innerHTML=="O's Turn"){
			document.getElementById('BottomMiddle').value="O";
			changeTurn();
		}
	}
	if(value=="BottomRight"){
		if(document.getElementById('BottomRight').value=="" && document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('BottomRight').value="X";
			changeTurn();
		}
		else if(document.getElementById('BottomRight').value=="" && document.getElementById('TurnIndicator').innerHTML=="O's Turn"){
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

function setPlayerCount(value){
	if(value=="1 Player"){
		document.getElementById('playerCount').innerHTML="1";
		document.getElementById('playerX').style.display='inline';
	}
	if(value=="2 Player"){
		document.getElementById('playerCount').innerHTML="2";
	}

	document.getElementById('1player').style.display='none';
	document.getElementById('2player').style.display='none';
}

function setPlayerType(value){
	if(value=="Play as X"){
		document.getElementById('playerType').innerHTML="X";
	}
	document.getElementById('playerX').style.display='none';
	document.getElementById('TurnIndicator').style.display='inline';
	document.getElementById('gameBoard').style.display='flex';
	document.getElementById('TopLeft').style.display='inline';
	document.getElementById('TopMiddle').style.display='inline';
	document.getElementById('TopRight').style.display='inline';
	document.getElementById('MiddleLeft').style.display='inline';
	document.getElementById('MiddleMiddle').style.display='inline';
	document.getElementById('MiddleRight').style.display='inline';
	document.getElementById('BottomLeft').style.display='inline';
	document.getElementById('BottomMiddle').style.display='inline';
	document.getElementById('BottomRight').style.display='inline';
}
/*
function oAIMove(){
	var TL = document.getElementById('TopLeft').value;
	var TM = document.getElementById('TopMiddle').value;
	var TR = document.getElementById('TopRight').value;
	var ML = document.getElementById('MiddleLeft').value;
	var MM = document.getElementById('MiddleMiddle').value;
	var MR = document.getElementById('MiddleRight').value;
	var BL = document.getElementById('BottomLeft').value;
	var BM = document.getElementById('BottomMiddle').value;;
	var BR = document.getElementById('BottomRight').value;

	if(TL == "X" && TM == "" && TR == "" && ML == "" && MM == "" && MR == "" && BL == "" && BM == "" && BR == ""){
		document.getElementById('MiddleMiddle').value="O";
	}
	TL == "" && TM == "X" && TR == "" && ML == "" && MM == "" && MR == "" && BL == "" && BM == "" && BR == ""){
		document.getElementById('MiddleMiddle').value="O";
	}
	if(TL == "" && TM == "" && TR == "X" && ML == "" && MM == "" && MR == "" && BL == "" && BM == "" && BR == ""){
		document.getElementById('MiddleMiddle').value="O";
	}
	TL == "" && TM == "X" && TR == "" && ML == "X" && MM == "" && MR == "" && BL == "" && BM == "" && BR == ""){
		document.getElementById('MiddleMiddle'.value = "O";
	}
	if(TL === "" && TM == "X" && TR == "" && ML == "" && MM == "" && MR == "" && BL == "" && BM == "" && BR == "X"){
		document.getElementById('MiddleMiddle').value="O";
	}
	TL == "" && TM == "X" && TR == "" && ML == "" && MM == "" && MR == "X" && BL == "" && BM == "" && BR == ""){
		document.getElementById('MiddleMiddle'.value = "O";
	}
	if(TL == "" && TM == "X" && TR == "" && ML == "" && MM == "" && MR == "" && BL == "X" && BM == "" && BR == ""){
		document.getElementById('MiddleMiddle').value="O";
	}
	TL == "" && TM == "X" && TR == "" && ML == "" && MM == "" && MR == "" && BL == "" && BM == "X" && BR == ""){
		document.getElementById('MiddleMiddle').value = "O";	
	}
}
*/
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


	if(TL == "X" && TM == "X" && TR == "X" || ML == "X" && MM == "X" && MR == "X" || BL == "X" && BM == "X" && BR == "X" || TL == "X" && ML == "X" && BL == "X" || TM == "X" && MM == "X" && BM == "X" || TR == "X" && MR == "X" && BR == "X" || TL == "X" && MM == "X" && BR == "X"){
		document.getElementById('TurnIndicator').innerHTML="X WINS";
	}
	if(TR == "X" && MM == "X" && BL == "X"){
		document.getElementById('TurnIndicator').innerHTML="X WINS";
	}
	if(TL == "O" && TM == "O" && TR == "O" || ML == "O" && MM == "O" && MR == "O" || BL == "O" && BM == "O" && BR == "O" || TL == "O" && ML == "O" && BL == "O" || TM == "O" && MM == "O" && BM == "O" || TR == "O" && MR == "O" && BR == "O" || TL == "O" && MM == "O" && BR == "O"){
		document.getElementById('TurnIndicator').innerHTML="O WINS";
	}
	if(TR == "O" && MM == "O" && BL == "O"){
		document.getElementById('TurnIndicator').innerHTML="O WINS";
	}
	
	if(TL != "" && TM != "" && TR != "" && ML != "" && MM != "" && MR != "" && BL != "" && BM != "" && BR != ""){
		document.getElementById('TurnIndicator').innerHTML="DRAW";
	}

	if(document.getElementById('TurnIndicator').innerHTML == "X WINS" || document.getElementById('TurnIndicator').innerHTML == "O WINS" || document.getElementById('TurnIndicator').innerHTML == "DRAW"){
		document.getElementById('gameReset').style.visibility='visible';
	}
}

function resetGame(){
	document.getElementById('TopLeft').value="";
	document.getElementById('TopMiddle').value="";
	document.getElementById('TopRight').value="";
	document.getElementById('MiddleLeft').value="";
	document.getElementById('MiddleMiddle').value="";
	document.getElementById('MiddleRight').value="";
	document.getElementById('BottomLeft').value="";
	document.getElementById('BottomMiddle').value="";
	document.getElementById('BottomRight').value="";
	document.getElementById('TurnIndicator').innerHTML="X's Turn"
	document.getElementById('gameReset').style.visibility='hidden';
}
