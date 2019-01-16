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

	if(document.getElementById('playerCount').innerHTML=="1" && document.getElementById('TurnIndicator').innerHTML=="O's Turn"){
		oAIMove();
	}
}

function changeTurn(){
		if(document.getElementById('TurnIndicator').innerHTML=="X's Turn"){
			document.getElementById('TurnIndicator').innerHTML="O's Turn";
		}
		else{
			document.getElementById('TurnIndicator').innerHTML="X's Turn";
		}
		incrementTurnCount();
}

function setPlayerCount(value){
	if(value=="1 Player"){
		document.getElementById('playerCount').innerHTML="1";
		document.getElementById('playerX').style.display='inline';
		document.getElementById('1player').style.display='none';
		document.getElementById('2player').style.display='none';
	}
	if(value=="2 Player"){
		document.getElementById('playerCount').innerHTML="2";
		document.getElementById('1player').style.display='none';
		document.getElementById('2player').style.display='none';
		viewBoard();
	}
}

function viewBoard(){
	
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

function setPlayerType(value){
	
	if(value=="Play as X"){
		document.getElementById('playerType').innerHTML="X";
	}
	
	viewBoard();

}

function incrementTurnCount(){
	var TC = document.getElementById('TurnCount').innerHTML;
	if(TC=="0"){
		document.getElementById('TurnCount').innerHTML="1";
	}
	else if(TC=="1"){
		document.getElementById('TurnCount').innerHTML="2";
	}
	else if(TC=="2"){
		document.getElementById('TurnCount').innerHTML="3";
	}
	else if(TC=="3"){
		document.getElementById('TurnCount').innerHTML="4";
	}
	else if(TC=="4"){
		document.getElementById('TurnCount').innerHTML="5";
	}
	else if(TC=="5"){
		document.getElementById('TurnCount').innerHTML="6";
	}
	else if(TC=="6"){
		document.getElementById('TurnCount').innerHTML="7";
	}
	else if(TC=="7"){
		document.getElementById('TurnCount').innerHTML="8";
	}
	else if(TC=="8"){
		document.getElementById('TurnCount').innerHTML="9";
	}
}

function tryWin(){
	var TL = document.getElementById('TopLeft').value;
	var TM = document.getElementById('TopMiddle').value;
	var TR = document.getElementById('TopRight').value;
	var ML = document.getElementById('MiddleLeft').value;
	var MM = document.getElementById('MiddleMiddle').value;
	var MR = document.getElementById('MiddleRight').value;
	var BL = document.getElementById('BottomLeft').value;
	var BM = document.getElementById('BottomMiddle').value;;
	var BR = document.getElementById('BottomRight').value;
	var TI = document.getElementById('TurnIndicator').innerHTML;
	if(TI=="O's Turn"){

document.getElementById('MiddleMiddle').value="G";
		if(TL=="O"&&TM=="O"&&TR==""||MR=="O"&&BR=="O"&TR==""||BL=="O"&&MM=="O"&&TR==""){
			document.getElementById('TopRight').value="O";
document.getElementById('MiddleMiddle').value="Q";
		}	
		if(TR=="O"&&TM=="O"&&TL==""||ML=="O"&&BL=="O"&TL==""||BR=="O"&&MM=="O"&&TL==""){
			document.getElementById('TopLeft').value="O";
		}
		if(BL=="O"&&BM=="O"&&BR==""||MR=="O"&&TR=="O"&BR==""||TL=="O"&&MM=="O"&&BR==""){
			document.getElementById('BottomRight').value="O";
		}	
		if(BR=="O"&&BM=="O"&&TB==""||ML=="O"&&TL=="O"&BL==""||TR=="O"&&MM=="O"&&BR==""){
			document.getElementById('BottomLeft').value="O";
		}
			
		checkForWin();
	}
}

function tryBlock(){

}

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
	var TC = document.getElementById('TurnCount').innerHTML;
	var Random = Math.floor(Math.random()*10)%4;
	
	tryWin();
	tryBlock();

	if(TC=="1"){
		if(MM!="X"){
			document.getElementById('MiddleMiddle').value="O";
			changeTurn();
		}
		else if(MM=="X"){
			document.getElementById('TopLeft').value="O";
			changeTurn();
		}
	}
	if(TC=="3"){
		if(MM!="X"){
			if(TL=="X"&&TR=="X"||TL=="X"&&BR=="X"||TL=="X"&&BL=="X"||TR=="X"&&BL=="X"||TR=="X"&&BR=="X"||BL=="X"&&BR=="X"){
				if(TL=="X"&&BR=="X"||TR=="X"&&BL=="X"){
					if(Random=="0"){
						document.getElementById('TopMiddle').value="O";
					}
					else if(Random=="1"){
						document.getElementById('BottomMiddle').value="O";
					}
					else if(Random=="2"){
						document.getElementById('MiddleLeft').value="O";
					}
					else if(Random=="3"){
						document.getElementById('MiddleRight').value="O";
					}
				}
				if(TL=="X"&&TR=="X"){
					document.getElementById('TopMiddle').value="O";
				}
				if(TL=="X"&&BL=="X"){
					document.getElementById('MiddleLeft').value="O";
				}
				if(BR=="X"&&TR=="X"){
					document.getElementById('MiddleRight').value="O";
				}
				if(BR=="X"&&BL=="X"){
					document.getElementById('BottomMiddle').value="O";
				}
			}
			if(TL=="X"&&TM=="X"||BR=="X"&&MR=="X"){document.getElementById('TopRight').value="O";}
			if(TR=="X"&&TM=="X"||BL=="X"&&ML=="X"){document.getElementById('TopLeft').value="O";}
			if(TL=="X"&&ML=="X"||BM=="X"&&BR=="X"){document.getElementById('BottomLeft').value="O";}
			if(TR=="X"&&MR=="X"||BM=="X"&&BL=="X"){document.getElementById('BottomRight').value="O";}
		}
		changeTurn();
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
	
	if(document.getElementById('TurnCount').innerHTML=="9"){
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
	document.getElementById('TurnCount').innerHTML="0"
	document.getElementById('gameReset').style.visibility='hidden';
}
