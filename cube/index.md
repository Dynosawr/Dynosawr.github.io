---
layout: default
title: Home 
---
<html lang="{{ site.lang | default: "en-US" }}"><html lang="en"><head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
	<title>Cube Simulator</title>

</head>
<body style="font-family:arial">

<h1>Cube Simulator</h1>
<p>Good game for people who are bored or stressed.</p>
<div id="wrapD3Cube">
	<div id="D3Cube" style="transform: rotateX(-22deg) rotateY(-38deg) rotateZ(-180deg) translateX(0px) translateY(0px) translateZ(0px);">
		<div id="side1"></div>
		<div id="side2"></div>
		<div id="side3"></div>
		<div id="side4"></div>
		<div id="side5"></div>
		<div id="side6"></div>
	</div>
</div>
<p style="text-align: center;">
	<span cursor: pointer>
	<a onclick="turnLeft()">Left</a>&nbsp;&nbsp;&nbsp;&nbsp;<a onclick="turnRight()">Right</a> <br>
	<a onclick="flipCube()">Flip</a> <br />
	<a onclick="randomLeft()">Shift</a></span>
</p> <hr />
<h1>How to play</h1>
	<ul>
		<li>Left/Right - Turn the Cube Left/Right.</li>
		<li>Flip - Flip the Cube.</li>
		<li>Shift - Shift the Cube</li>
		<b>Note: You can't Shift Blue/Green tile.<br /></b>

<script>
var cubex = -22,	// initial rotation
cubey = -38,
cubez = 0;
function rotate(variableName, degrees) {
	window[variableName] = window[variableName] + degrees;
	rotCube(cubex, cubey, cubez);
}
function rotCube(degx, degy, degz){
	segs = "rotateX("+degx+"deg) rotateY("+degy+"deg) rotateZ("+degz+"deg) translateX(0) translateY(0) translateZ(0)";
	$('#D3Cube').css({"transform":segs});
}
function turnRight() {
	rotate("cubey", 90);
}
function turnLeft() {
	rotate("cubey", -90);
}
function flipCube() {
	rotate("cubez", -180);
}
function randomLeft() {
	rotate("cubez", 270);
}
</script>

<style>
#wrapD3Cube {
    width: 250px;
    height: 213px;
    margin: 20px auto;
    background-color: #EEE;
}
#D3Cube {
    width: 112px;
    height: 112px;
    top: 50px;
    transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
    -moz-transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
    -webkit-transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
    margin: auto;
    position: relative;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
}
#D3Cube > div {
    position: absolute;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    width: 112px;
    height: 112px;
    float: left;
    overflow: hidden;
	opacity: 0.85;
}
#side1 {
    transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(56px);
    -moz-transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(56px);
    -webkit-transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(56px);
	background-color: #FFF;
}
#side2 {
    transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(56px);
    -moz-transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(56px);
    -webkit-transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(56px);
	background-color: #ffaf1c;
}
#side3 {
    transform: translateX(0px) translateY(0px) translateZ(56px);
    -moz-transform: translateX(0px) translateY(0px) translateZ(56px);
    -webkit-transform: translateX(0px) translateY(0px) translateZ(56px);
	background-color: #58d568;
}
#side4 {
    transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(56px);
    -moz-transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(56px);
    -webkit-transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(56px);
	background-color: #ed3030;
}
#side5 {
    transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(56px);
    -moz-transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(56px);
    -webkit-transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(56px);
	background-color: #1c5ffe;
}
#side6 {
    transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(56px);
    -moz-transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(56px);
    -webkit-transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(56px);
	background-color: #f2f215;
}
</style>
<span style="color:transparent">
</body>
</html>
</span>
