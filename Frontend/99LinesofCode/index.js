let friends = document.querySelectorAll(".friendName");

function addFriend(Name){
	if(document.getElementById('newFriendsList').innerHTML==""){
		document.getElementById('newFriendsList').innerHTML += (Name);
	}
	else{
		document.getElementById('newFriendsList').innerHTML += (", " + Name);
	}
}

function sing(friendNames){
	let friendlist = friendNames.split(", ");

	var friendCount = friendlist.length;
	for(var i = 0; i < friendCount; i++){
		console.log(friendlist[i] + ":");
		for(var j = 99; j > 0; j--){
			if(j == 1){
				console.log("1 line of code on the wall, 1 line of code; " + friendlist[i] +" strikes one out, clears it all out, no more lines of code on the wall.");
			}
			else{
				console.log(j + " lines of code on the wall, " + j + " lines of code; " + friendlist[i] + " strikes one out, clears it all out, " + (j-1) + " lines of code on the wall.");
			}
		}
	}

}
