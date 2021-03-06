var w = 1200;

var treeX = 800; // .branch left
var treeY = 200;
var treeLength = 200;
var rotate = 30;

// 一定間隔
function timer() {
	addSnow();
	setTimeout("timer()", 500);
} 

// 雪降らせる
function addSnow() {
	// window.alert("add");
	var snow = document.createElement('div');
	snow.className = "snow";
	snow.style.left = setX() + "px";
	snow.style.top = setY() + "px";
	document.getElementById('drowArea').appendChild(snow);
}

// 手動降雪
function addSnowSelf() {
	var snow = document.createElement('div');
	snow.className = "snow";
	snow.style.backgroundColor = "#f00";
	snow.style.left = setX() + "px";
	snow.style.top = setY() + "px";
	document.getElementById('drowArea').appendChild(snow);
}

// x軸を乱数で生成
function setX() {
	var x = Math.floor( Math.random() * w);
	return x;
}

// Y軸を乱数で生成
function setY() {
	var y = Math.floor( Math.random() * 100);
	return y;
}

// 木を生成
function makeTree() {
	treeLength = treeLength * 3 / 4;

	branching();
	getPosition();

	// var branch = document.createElement('div');
	// branch.className = "branch";
	// branch.style.bottom = treeY + "px";
	// branch.style.height = treeLength + "px";
	// branch.style.transform = "rotate(-45deg)";
	// document.getElementById('tree').appendChild(branch);	
}

function branching() {
	var branch = document.createElement('div');
	branch.className = "branch";
	branch.style.left = treeX + "px"
	branch.style.bottom = treeY + "px";
	branch.style.height = treeLength + "px";
	branch.style.transform = "rotate(" + rotate + "deg)";
	document.getElementById('tree').appendChild(branch);

	// var branch = document.createElement('div');
	// branch.className = "branch";
	// branch.style.left = treeX + "px"
	// branch.style.bottom = treeY + "px";
	// branch.style.height = treeLength + "px";
	// branch.style.transform = "rotate(-" + rotate  + "deg)";
	// document.getElementById('tree').appendChild(branch);
}

function getPosition() {
	sin = Math.sin(Math.PI / (180 / (90-rotate)));
	cos = Math.cos(Math.PI / (180 / (90-rotate)));
	treeY += (sin * treeLength);
	treeX += (cos * treeLength);
	rotate += 60;
}