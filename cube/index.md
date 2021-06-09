---
layout: default
title: Home 
---
<html lang="{{ site.lang | default: "en-US" }}"><html lang="en"><head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
	<title>Cube Simulator</title>

</head>
<body>

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
	<a onclick="turnLeft()">Left</a>&nbsp;&nbsp;&nbsp;&nbsp;<a onclick="turnRight()">Right</a> <br>
	<a onclick="flipCube()">Flip</a>
</p>

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
</script>

<style>
nav {
  position: absolute;
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #009e88;
  overflow-x: hidden;
  padding-top: 20px;
}

nav a, .dropdown-btn {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #ffffff;
  display: block;
  border: none;
  background: none;
  width:100%;
  text-align: left;
  cursor: pointer;
  outline: none;
}

nav a:hover, .dropdown-btn:hover {
  color: #f1f1f1;
}

.active {
  background-color: #009e88;
  color: white;
}

.dropdown-container {
  display: none;
  background-color: #009e88;
  padding-left: 8px;
}

body {
  font-family: arial;
  background-color: #ffffff;
}
input,select{vertical-align:middle}
a, a:visited {
    color: #0101d0;
    font-weight: bold;
    cursor: pointer;
    font-size: 20px;
    font-family: arial;
    line-height: 20px;
    display: inline-block;
    padding: 10px;
}
a:hover {
	color: #000;
}

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



</body></html>
