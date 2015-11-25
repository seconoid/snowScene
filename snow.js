function timer() {
	add();
	setTimeout("timer()", 500);
} 

function add() {
	// window.alert("add");
	var snow = document.createElement('div');
	snow.className = "snow";
	snow.style.left = setX() + "px";
	snow.style.top = setY() + "px";
	document.getElementById('field').appendChild(snow);
}

function setX() {
	var x = Math.floor( Math.random() * 600);
	return x;
}

function setY() {
	var y = Math.floor( Math.random() * 100);
	return y;
}